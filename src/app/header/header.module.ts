import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [NavbarComponent, HomeComponent],
  imports: [CommonModule, HeaderRoutingModule],
  exports: [NavbarComponent],
})
export class HeaderModule {}
