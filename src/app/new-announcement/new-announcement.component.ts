import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AnnouncementService } from '../shared/model/announcement.service';
import { Announcement } from '../shared/model/announcement';

@Component({
  selector: 'app-new-announcement',
  templateUrl: './new-announcement.component.html',
  styleUrls: ['./new-announcement.component.css']
})
export class NewAnnouncementComponent implements OnInit {
  myForm: FormGroup;
  myDBForm: FormGroup;

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

  CreateAnnouncement() {
      console.log(this.myDBForm.value);
      this.announcementService.createAnnouncement(this.myDBForm.value);
  }
}

