import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavbarModule } from './navbar/navbar.module';
import { LeftSidebarModule } from './left-sidebar/left-sidebar.module';
import { MainContentModule } from './main-content/main-content.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { CommonUiModule } from 'common-ui';

@NgModule({
  declarations: [AppComponent, EmptyRouteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    LeftSidebarModule,
    MainContentModule,
    CommonUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
