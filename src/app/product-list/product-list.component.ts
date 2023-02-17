import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'], 
  // template :   <product-alerts (notify)="onNotify()"> </product-alerts>
})
export class ProductListComponent {
    products = [...products];

    share() {
        window.alert('The product has been shared!');
    }
    onNotify() {
        console.log("entering onNotify");
        window.alert('You will be notified when the product goes on sale');
        console.log("leaving onNotify");
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
