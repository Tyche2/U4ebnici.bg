import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Announcement } from '../shared/model/announcement';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-announcements-list',
  templateUrl: './announcements-list.component.html',
  styleUrls: ['./announcements-list.component.css']
})

export class AnnouncementsListComponent implements OnInit {

  @Input() announcements: Observable<Announcement[]>;

  constructor() { }

  ngOnInit() {
  }

}
