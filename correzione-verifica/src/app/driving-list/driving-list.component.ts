import { Component, OnInit, Input } from '@angular/core';
import { Driving } from '../driving.model';
import { Driver } from 'selenium-webdriver/opera';
import { Rent } from '../rent.model';

@Component({
  selector: 'app-driving-list',
  templateUrl: './driving-list.component.html',
  styleUrls: ['./driving-list.component.css']
})
export class DrivingListComponent implements OnInit {

  @Input() lista: Driving[];
  @Input() rentList: Rent[];
  lista2 : Driving;

  constructor() { }

  ngOnInit(): void {
  }
  onClick(mTipo : HTMLInputElement, mDescr : HTMLInputElement, mTar : HTMLInputElement, mVM : HTMLInputElement, auto : Driving) : boolean{
    console.log(`descrizione: ${mTipo} , ${mDescr}, ${mTar}, ${mVM} `);
    this.lista2 = auto;
    this.rentList.push(new Rent(auto,1))




    return false;

  }

}
