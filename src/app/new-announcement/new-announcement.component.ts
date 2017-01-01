import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AnnouncementService } from '../shared/model/announcement.service';
import { Announcement } from '../shared/model/announcement';

@Component({
  selector: 'app-new-announcement',
  templateUrl: './new-announcement.component.html',
  styleUrls: ['./new-announcement.component.css'],
  providers: [ AnnouncementService ]
})
export class NewAnnouncementComponent implements OnInit {
  myForm: FormGroup;
  myDBForm: FormGroup;
  selectedFile: any;

  constructor(private fb: FormBuilder, private announcementService: AnnouncementService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
            title: ['', Validators.required],
            discipline: ['', Validators.required],
            clas: ['', Validators.required],
            authors: ['', Validators.required],
            price: ['', Validators.required]
        });

    this.myDBForm = this.fb.group({
            title: '',
            discipline: '',
            clas: '',
            image: '',
            publisher: '',
            authors: '',
            year: '',
            description: '',
            condition: '',
            price: 0
        });
  }

  onConditionChange(e: any) {
    this.myDBForm.value.condition = e.target.value;
  }

  onImageSelected(e: any) {
    this.selectedFile = e.target.files[0];
  }

  CreateAnnouncement() {
    console.log(this.myDBForm.value);
    if (this.selectedFile) {
      let firebase = require('firebase');

      // Create a root reference
      let storageRef = firebase.storage().ref();

      // Create a reference to image name
      let imageRef = storageRef.child(this.selectedFile.name);

      imageRef.put(this.selectedFile)
        .then(snapshot => {
            this.myDBForm.value.image = snapshot.downloadURL;
            this.announcementService.createAnnouncement(this.myDBForm.value);
          });
    } else {
      this.announcementService.createAnnouncement(this.myDBForm.value);
    }
  }
}

