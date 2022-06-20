import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../pages/auth/login/login.component';
import { UnloggedBaseComponent } from './unlogged-base.component';

const routes: Routes = [
  {
    path: '',
    component: UnloggedBaseComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnloggedBaseRoutingModule { }
