import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsDataService } from './products-data.service';
import { HttpClientModule } from '@angular/common/http';

import { ProductsComponent } from './products/products.component';
import { PmMaterialModule } from '../shared/material-module';




@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    PmMaterialModule,
  ],
  providers: [ProductsDataService]
})
export class ProductsModule { }
 