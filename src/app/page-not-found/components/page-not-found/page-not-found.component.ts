import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  image = ['assets/proyecto_cerdef/page-not-found.jpg'];
  constructor() { }

  ngOnInit() {
  }

}
