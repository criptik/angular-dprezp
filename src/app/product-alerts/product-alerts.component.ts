import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})


export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify: EventEmitter<string>  = new EventEmitter<string>();

  sendNotification(event: string) {
     if (this.product) {
        console.log(`in sendNotification for ${this.product.name} before emit`);
     }                
     this.notify.emit(event);
     console.log("in sendNotification after emit");
  }
}
