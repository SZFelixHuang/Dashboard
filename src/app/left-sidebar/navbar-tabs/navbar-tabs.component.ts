import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-navbar-tabs',
  templateUrl: './navbar-tabs.component.html',
  styleUrls: ['./navbar-tabs.component.less']
})
export class NavbarTabsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.toggleTab(null);
  }

  toggleTab(event) {
    if (event == null) {
      $('#menus')
        .children('a.nav-link')
        .toggleClass('active');
      $('#dashboard-menus').slideToggle(500);
    } else {
      let $navtabLink = $(event.target);
      if (!$navtabLink.is('a')) {
        $navtabLink = $navtabLink.parent('a');
      }
      const $activedTab = $('#nav-tabs').find('a.active');
      if (!$navtabLink.is($activedTab)) {
        const currentId = $('#nav-tabs')
          .find('li.nav-item')
          .children('a.active')
          .toggleClass('active')
          .parent()
          .attr('id');
        $('#dashboard-' + currentId).slideToggle(300);
        $navtabLink.toggleClass('active');
        $('#dashboard-' + $navtabLink.parent().attr('id')).slideToggle(300);
      }
    }
  }
}
