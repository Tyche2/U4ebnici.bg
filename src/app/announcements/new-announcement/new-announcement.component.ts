import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AlertService } from '../../core/alert/alert.service';
import { AnnouncementService } from '../shared/announcement.service';
import { Announcement } from '../shared/announcement.model';

@Component({
  selector: 'app-new-announcement',
  templateUrl: './new-announcement.component.html',
  styleUrls: ['./new-announcement.component.css']
})

export class NewAnnouncementComponent implements OnInit {
  myDBForm: FormGroup;
  selectedFile: any;

  constructor(private fb: FormBuilder,
    private announcementService: AnnouncementService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.myDBForm = this.fb.group({
            title: ['', Validators.required],
            discipline: ['', Validators.required],
            clas: ['', Validators.required],
            image: '',
            publisher: '',
            authors: ['', Validators.required],
            year: '',
            description: '',
            condition: '',
            price: [0, Validators.required]
        });
  }

  onConditionChange(e: any) {
    this.myDBForm.value.condition = e.target.value;
  }

  onImageSelected(e: any) {
    this.selectedFile = e.target.files[0];
  }

  CreateAnnouncement() {
    if (this.selectedFile) {
      let firebase = require('firebase');

      // Create a root reference
      let storageRef = firebase.storage().ref();

      // Create a reference to image name
      let imageRef = storageRef.child(this.selectedFile.name);

      imageRef.put(this.selectedFile)
        .then(snapshot => {
            this.myDBForm.value.image = snapshot.downloadURL;
            this.announcementService.createAnnouncement(this.myDBForm.value)
            .subscribe(() => {
                    this.alertService.success('Обявата е записана', true);
                    this.myDBForm.reset();
                },
                err => this.alertService.error(`Грешка при запис на обява ${err}`)
            );
          });
    } else {
      this.announcementService.createAnnouncement(this.myDBForm.value)
      .subscribe(() => {
              this.alertService.success('Обявата е записана', true);
              this.myDBForm.reset();
          },
          err => this.alertService.error(`Грешка при запис на обява ${err}`)
      );
    }
  }
}

