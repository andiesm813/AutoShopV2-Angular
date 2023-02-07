import { Component } from '@angular/core';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-product-details1updates',
  templateUrl: './product-details1updates.component.html',
  styleUrls: ['./product-details1updates.component.scss']
})
export class ProductDetails1UpdatesComponent {
  public value = '4.5';
  public value1 = '4';
  public value2 = '3.5';
  public value3 = '5';
}
