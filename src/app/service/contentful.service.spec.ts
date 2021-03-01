import { TestBed, inject } from '@angular/core/testing';

import { MovieSingleComponent } from './components/product-detail.service';

describe('ProductDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieSingleComponent]
    });
  });

  it('should be created', inject([MovieSingleComponent], (service: MovieSingleComponent) => {
    expect(service).toBeTruthy();
  }));
});
