/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AnnouncementService } from './announcement.service';

describe('AnnouncementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnnouncementService]
    });
  });

  it('should ...', inject([AnnouncementService], (service: AnnouncementService) => {
    expect(service).toBeTruthy();
  }));
});
