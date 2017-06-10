import { CheckoutComponent } from './../checkout/checkout.component';
import { ShoppingComponent } from './../shopping/shopping.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: 'shopping', component: ShoppingComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: '', redirectTo: '/shopping', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})

export class app_RouterModule { }
