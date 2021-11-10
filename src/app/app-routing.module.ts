import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./viewa/home/home.component";

import {HomeComponent} from "./viewa/payment/payment.component";

const routes: Routes = [
{
path: "",
component: HomeComponent,
},
{
  path:"payments"
  component: PaymentCompoent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
