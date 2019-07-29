import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CostumersRoutingModule } from './costumers-routing.module';
import {CustomersListComponent} from "./customers-list/customers-list.component";
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { CustomersNewComponent } from './customers-new/customers-new.component';
import { RepDialogComponent } from './rep-dialog/rep-dialog.component';


import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    CustomersListComponent,
    CustomerCardComponent,
    CustomersNewComponent,
    RepDialogComponent
  ],
  entryComponents:[RepDialogComponent],
  imports: [
    CommonModule,
    CostumersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //Material
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatSnackBarModule
  ]
})
export class CostumersModule { }
