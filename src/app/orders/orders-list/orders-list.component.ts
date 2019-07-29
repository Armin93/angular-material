import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, PageEvent } from '@angular/material';

const ELEMENT_DATA=[
  {
  orderDate:new Date(),
  orderNumber:100,
  total:29.99,
  description:'2lbs of tuna',
  isChecked:false
},
{
orderDate:new Date(),
orderNumber:101,
total:39.99,
description:'2leeebs of tuna',
isChecked:false
},
{
  orderDate:new Date(),
  orderNumber:102,
  total:293.99,
  description:'2lbs of tdduna',
  isChecked:false
  }, {
    orderDate:new Date(),
    orderNumber:100,
    total:29.99,
    description:'2lbs of tuna',
    isChecked:false
  },
  {
  orderDate:new Date(),
  orderNumber:101,
  total:39.99,
  description:'2leeebs of tuna',
  isChecked:false
  },
  {
    orderDate:new Date(),
    orderNumber:102,
    total:293.99,
    description:'2lbs of tdduna',
    isChecked:false
    }, {
      orderDate:new Date(),
      orderNumber:100,
      total:29.99,
      description:'2lbs of tuna',
      isChecked:false
    },
    {
    orderDate:new Date(),
    orderNumber:101,
    total:39.99,
    description:'2leeebs of tuna',
    isChecked:false
    },
    {
      orderDate:new Date(),
      orderNumber:102,
      total:293.99,
      description:'2lbs of tdduna',
      isChecked:false
      }
];
@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  [x: string]: any;
displayedColumns:string[]=['actions','orderNumber','orderDate','description','total'];
 dataSource:MatTableDataSource<object>;

 length=100;
 pageIndex=0;
 pageSize=10;
 pageSizeOptions=[1,2,5,10]

 @ViewChild(MatSort)sort:MatSort;
 pageEvent:PageEvent;

constructor() { }
onPageChange(e){
  this.pageIndex= e.pageIndex;
  this.pageSize=e.pageSize;
  this.loadData(this.pageIndex,this.pageSize)

}
loadData(pageIndex,pageSize){
  this.dataSource=new MatTableDataSource<object>(ELEMENT_DATA.slice(pageIndex,pageIndex+pageSize));
}
  ngOnInit() {
    this.loadData(0,this.pageSize)
    this.dataSource.sort=this.sort;
  }

  selectAll(){
    for(var elm of ELEMENT_DATA){
      elm.isChecked = !elm.isChecked;
    }
  }
}
