import { Directive, ElementRef, AfterViewInit } from '@angular/core';

import { LocalStorageService } from '../../core/services/local-storage.service';

@Directive({
  selector: '[appMarkReviewedAnnouncement]'
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

    if (this.reviewedAnnouncements.indexOf(this.elementId) > -1) {
      let reviewedElementSpan = this.element.nativeElement.getElementsByClassName('reviewed-announcement-span')[0];
      console.log(reviewedElementSpan);
      reviewedElementSpan.classList.remove('hidden');
    }
  }
}
