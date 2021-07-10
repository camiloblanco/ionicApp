import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.scss'],
})
export class AccesoComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  olvidePassword() {
    console.log('olvidePassword');
  }

  login() {
    

  }

}
