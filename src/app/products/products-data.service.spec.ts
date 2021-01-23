import { TestBed } from '@angular/core/testing';

import { ProductsDataService } from './products-data.service';

import { HttpClientModule } from "@angular/common/http";

describe("ProductDataService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [ProductsDataService],
      imports: [HttpClientModule]
    })
  );

  it("should be created", () => {
    const service: ProductsDataService = TestBed.get(ProductsDataService);
    expect(service).toBeTruthy();
  });
});






