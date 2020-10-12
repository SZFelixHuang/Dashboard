import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSidebarComponent } from './left-sidebar.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { StatisticComponent } from './statistic/statistic.component';
import { NavbarTabsComponent } from './navbar-tabs/navbar-tabs.component';
import { MenusComponent } from './menus/menus.component';
import { SettingsComponent } from './settings/settings.component';
import { SkinsComponent } from './skins/skins.component';
import { CommonUiModule } from 'common-ui';

@NgModule({
  imports: [CommonModule, CommonUiModule],
  declarations: [
    LeftSidebarComponent,
    UserAccountComponent,
    StatisticComponent,
    NavbarTabsComponent,
    MenusComponent,
    SettingsComponent,
    SkinsComponent
  ],
  exports: [LeftSidebarComponent]
})
export class LeftSidebarModule {}
