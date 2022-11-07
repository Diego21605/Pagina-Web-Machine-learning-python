import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  visibleSidebar1: any;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
  }
}
