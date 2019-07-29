import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'customers',
    loadChildren:'./customers/costumers.module#CostumersModule'
  },
  {
    path:'orders',
    loadChildren:'./orders/orders.module#OrdersModule'
  },
  {
    path:'messages',
    loadChildren:'./messages/messages.module#MessagesModule'
  },
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
