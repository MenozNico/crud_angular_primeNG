import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
          label: 'Dashboard',
          icon: 'pi pi-fw pi-folder',
          routerLink: 'dashboard',
      },
      {
          label: '',
          separator: true
      },
      {
          label: 'Heroes',
          icon: 'pi pi-fw pi-list',
          routerLink: 'hero'
      }
  ];
  }

}
