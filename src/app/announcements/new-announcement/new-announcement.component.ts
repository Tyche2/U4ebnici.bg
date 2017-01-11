import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
    private alertService: AlertService,
    private router: Router) { }

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

  onCreateAnnouncement() {
    this.announcementService.createAnnouncement(this.myDBForm.value, this.selectedFile)
      .then(() => {
        this.alertService.success('Обявата е записана', true);
        this.router.navigate(['home']);
      })
      .catch(err => this.alertService.error(`Грешка при запис на обява ${err}`));
  }
}

