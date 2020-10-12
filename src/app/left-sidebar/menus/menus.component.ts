import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.less']
})
export class MenusComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  toggleSubMenus(event) {
    let $menuLink = $(event.target);
    if (!$menuLink.is('a')) {
      $menuLink = $menuLink.parent('a');
    }
    const $activedMenu = $('#menu-pane').find('li.active');
    if (!$menuLink.is($activedMenu.children('a'))) {
      $activedMenu
        .toggleClass('active')
        .children('a')
        .next()
        .slideToggle(300)
        .prev()
        .children('i:last-child')
        .toggleClass('fa-angle-down');
    }

    $menuLink.parent().toggleClass('active');
    $menuLink
      .next()
      .slideToggle(300)
      .prev()
      .children('i:last-child')
      .toggleClass('fa-angle-down');
  }
}
