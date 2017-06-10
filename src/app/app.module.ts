// Angular Libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

// Angular Material Libraries
import { MdToolbarModule, MdCardModule, MdButtonModule, MdGridListModule, MdChipsModule, MdListModule } from '@angular/material';
// App Components
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessComponent } from './success/success.component';
// Services
import { ProductService } from './Services/product.service';
import { ShoppingCartService } from './Services/shopping-cart.service';
// Router
import { app_RouterModule } from './router/router.module';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    CheckoutComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdGridListModule,
    MdChipsModule,
    MdListModule,
    app_RouterModule
  ],
  providers: [ProductService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
