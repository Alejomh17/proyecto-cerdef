import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  identi: string;
  constructor() { }
  identificacion = [
    'Cédula',
    'Pasaporte'
  ];
  ngOnInit() {
  }

}
