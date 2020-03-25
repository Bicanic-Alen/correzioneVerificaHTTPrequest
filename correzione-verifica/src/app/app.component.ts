import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Driving } from './driving.model';
import { Rent } from './rent.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'selfdrivingthings';

  rent_list : Rent[] = new Array<Rent>();
  drive : Driving;
  listVeicoli : Driving[];
  o : Observable<Driving[]>;

  constructor(public  http: HttpClient) {

  }

  ngOnInit() {
    this.listVeicoli = new Array <Driving>();
    this.o = this.http.get<Driving[]>("https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi");
    this.o.subscribe(this.getDriving);
  }

  getDriving = (drive : Driving[]) =>
  {
    this.listVeicoli = drive;
  }
}
