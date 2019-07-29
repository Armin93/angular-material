import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersListComponent } from '../customers/customers-list/customers-list.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import {CustomersNewComponent} from './customers-new/customers-new.component';
const routes: Routes = [
  {
    path:'',
    component:CustomersListComponent
  },
  {
    path:'info',
    component:CustomerCardComponent
  },
  {
    path:'new',
    component:CustomersNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostumersRoutingModule { }
