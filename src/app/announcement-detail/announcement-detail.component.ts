import { Notice } from './../shared/model/notice-model';
import { AnnouncementService } from './../announcement/announcement.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-announcement-detail',
  templateUrl: './announcement-detail.component.html',
  styleUrls: ['./announcement-detail.component.css']
})
export class AnnouncementDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
