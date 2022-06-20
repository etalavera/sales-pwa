import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnloggedBaseRoutingModule } from './unlogged-base-routing.module';
import { LoginComponent } from '../../pages/auth/login/login.component';
import { UnloggedBaseComponent } from './unlogged-base.component';


@NgModule({
  declarations: [
    LoginComponent,
    UnloggedBaseComponent
  ],
  imports: [
    CommonModule,
    UnloggedBaseRoutingModule
  ]
})
export class UnloggedBaseModule { }
