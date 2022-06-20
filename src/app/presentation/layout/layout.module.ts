import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LoggedBaseModule } from './logged-base/logged-base.module';
import { UnloggedBaseModule } from './unlogged-base/unlogged-base.module';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    LoggedBaseModule,
    UnloggedBaseModule
  ]
})
export class LayoutModule { }
