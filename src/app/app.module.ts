import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { NgOptimizedImage } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NavComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
