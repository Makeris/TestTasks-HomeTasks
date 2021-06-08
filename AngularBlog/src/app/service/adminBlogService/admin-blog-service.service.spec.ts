import { TestBed } from '@angular/core/testing';

import { AdminBlogServiceService } from './admin-blog-service.service';

describe('AdminBlogServiceService', () => {
  let service: AdminBlogServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminBlogServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
