import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHeaderInterceptorService } from './auth-header-interceptor.service';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './blocks/root/app.component';
import { BlocksModule } from './blocks/blocks.module';
import { AboutComponent } from './blocks/about/about.component';
import { ContactComponent } from './blocks/contact/contact.component';




@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProductsModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    BlocksModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHeaderInterceptorService,
    multi: true
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
