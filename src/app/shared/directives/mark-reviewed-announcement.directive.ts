import { Directive, ElementRef, AfterViewInit } from '@angular/core';

import { LocalStorageService } from '../../core/local-storage.service';

@Directive({
  selector: '[appMarkReviewedAnnouncement]',
  // providers: [LocalStorageService]
})
export class MarkReviewedAnnouncementDirective implements AfterViewInit {
  private reviewedClassSelector: string = 'reviewed';
  private reviewedAnnouncements: string[];
  private elementId: string;


  constructor(
    private element: ElementRef,
    private localStorageService: LocalStorageService
  ) {}


  ngAfterViewInit() {
    this.reviewedAnnouncements = this.localStorageService.getCollection('reviewed-announcements');
    this.elementId = this.element.nativeElement.getAttribute('data-id');
    // console.log(this.elementId);
    if (this.reviewedAnnouncements.indexOf(this.elementId) > -1) {
      this.element.nativeElement.classList.add(this.reviewedClassSelector);
    }
  }
}
