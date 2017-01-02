import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-announcements',
  templateUrl: './search-announcements.component.html',
  styleUrls: ['./search-announcements.component.css']
})
export class SearchAnnouncementsComponent implements OnInit {
  searchText: string;
  searchClas: string;
  searchAuthor: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onInput(e: any) {
    if (e.target.name === 'title') {
      this.searchText = e.target.value;
    } else if (e.target.name === 'clas') {
      this.searchClas = e.target.value;
    } else if (e.target.name === 'author') {
      this.searchAuthor = e.target.value;
    }
  }

  findRecords() {
    let queryParams = {};

    if (this.searchText && this.searchText !== '') {
      queryParams['text'] = this.searchText;
    }

    if (this.searchClas && this.searchClas !== '') {
      queryParams['clas'] = this.searchClas;
    }

    if (this.searchAuthor && this.searchAuthor !== '') {
      queryParams['author'] = this.searchAuthor;
    }

    this.router.navigate(['/announcements', queryParams]);
  }
}
