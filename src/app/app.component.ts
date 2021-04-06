import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

ngOnInit (){
  let numero = 10;
  // debugger;
  numero = 20;
  numero = numero +10;
  numero = 0;
  console.log(">>numero: " + numero);
}

}
