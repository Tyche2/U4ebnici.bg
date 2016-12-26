import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { DataModel } from '../announcement/data-model'
import { AnnouncementService } from '../announcement/announcement.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  providers: [AnnouncementService]
})
export class BookDetailComponent implements OnInit {
  
  constructor(
    private announcementService: AnnouncementService,
    private route: ActivatedRoute,
    private location: Location
     ) { }

  ngOnInit() {
  }

}
