import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedBaseRoutingModule } from './logged-base-routing.module';
import { HomeComponent } from '../../pages/home/home.component';
import { LoggedBaseComponent } from './logged-base.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoggedBaseComponent
  ],
  imports: [
    CommonModule,
    LoggedBaseRoutingModule
  ]
})
export class LoggedBaseModule { }
