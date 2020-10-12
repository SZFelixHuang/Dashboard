import { Component, OnInit } from '@angular/core';
import { facede } from '../../../assets/Facade';

@Component({
  selector: 'dashboard-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.less']
})
export class SkinsComponent implements OnInit {
  isFullScreen: boolean;
  isNightMode: boolean;
  isEffectOnLeftSidebar: boolean;
  isEffectOnHeader: boolean;
  isHideDashboardLogo: boolean;
  isMinimizedHeader: boolean;

  constructor() {
    this.isFullScreen = facede.theme.isFullScreen();
    this.isNightMode = facede.theme.isNightMode();
    this.isEffectOnLeftSidebar = facede.theme.isEffectOnSidebar();
    this.isEffectOnHeader = facede.theme.isEffectOnHeader();
    this.isHideDashboardLogo = facede.theme.isHiddenDashboardLogo();
    this.isMinimizedHeader = facede.theme.isMinimizedHeader();
  }

  ngOnInit() {
    const theme = facede.theme.getTheme();
    this.setSkin(theme);
  }

  setSkin(themeName) {
    $('li[theme=' + themeName + ']')
      .children('div.skin')
      .toggleClass('fa fa-check');
  }

  chooseSkin(event) {
    let $themeSkin = $(event.target);
    if (!$themeSkin.is('li')) {
      $themeSkin = $themeSkin.parent('li');
    }
    const $choosedSkin = $('#theme-skins').find('div.fa-check');
    if (!$themeSkin.is($choosedSkin.parent())) {
      $choosedSkin.toggleClass('fa fa-check');
      const themeName = $themeSkin.attr('theme');
      this.setSkin(themeName);
      facede.theme.setTheme(themeName);
    }
  }

  fullScreen(event) {
    facede.theme.setFullScreen(event.state);
  }

  nightMode(event) {
    facede.theme.setNightMode(event.state);
  }

  effectOnSidebar(event) {
    facede.theme.setEffectOnSidebar(event.state);
  }

  effectOnHeader(event) {
    facede.theme.setEffectOnHeader(event.state);
  }

  hideDashboardLogo(event) {
    facede.theme.hideDashboardLogo(event.state);
  }

  setMiniziedHeader(event) {
    facede.theme.setMinimizeHeader(event.state);
  }
}
