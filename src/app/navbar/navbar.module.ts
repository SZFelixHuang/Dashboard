import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavbarComponent, NavbarMenuComponent],
  exports: [NavbarComponent]
})
export class NavbarModule {}
