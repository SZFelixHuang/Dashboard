import { Component, OnInit } from '@angular/core';
import { facede } from '../../assets/Facade';

@Component({
  selector: 'dashboard-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  isHiddenSidebar: boolean;

  constructor() {}

  ngOnInit() {}

  toggleLeftSidebar() {
    this.isHiddenSidebar = !this.isHiddenSidebar;
    facede.theme.toggleMinimalizerSidebar(this.isHiddenSidebar);
  }
}
