import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ProductDetails1UpdatesComponent } from './product-details1updates.component';

describe('ProductDetails1UpdatesComponent', () => {
  let component: ProductDetails1UpdatesComponent;
  let fixture: ComponentFixture<ProductDetails1UpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetails1UpdatesComponent ],
      imports: [ NoopAnimationsModule, FormsModule ]
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
