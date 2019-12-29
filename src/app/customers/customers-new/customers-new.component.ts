import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material';
import {RepDialogComponent} from '../rep-dialog/rep-dialog.component'
import{MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-customers-new',
  templateUrl: './customers-new.component.html',
  styleUrls: ['./customers-new.component.css']
})
export class CustomersNewComponent implements OnInit {
emailFormControl:FormControl
  constructor(public dialog:MatDialog,public snackbar:MatSnackBar) { }

  ngOnInit() {
    this.emailFormControl=new FormControl('',[
    Validators.required,
    Validators.email
  ]);
  }

  openUndoSnackBar(){
    const snackbarRef=this.snackbar.open('Customer saved','UNDO',{
      horizontalPosition:"end"
    });
   snackbarRef.onAction().subscribe(()=>{
      alert("Undo that save")
    })
      
    }
  openRepiDialog(){
const dialogRef=this.dialog.open(RepDialogComponent,{
  width:'250px',
  data:{}
});

dialogRef.afterClosed().subscribe(result=>{
  alert(`User chose ${result}`)
})
  }
}