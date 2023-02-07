import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetails1UpdatesComponent } from './product-details1-updates.component';

describe('ProductDetails1UpdatesComponent', () => {
  let component: ProductDetails1UpdatesComponent;
  let fixture: ComponentFixture<ProductDetails1UpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetails1UpdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetails1UpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
