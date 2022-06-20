import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedGuard } from 'src/app/core/guards/auth/logged/logged.guard';
import { UnloggedGuard } from 'src/app/core/guards/auth/unlogged/unlogged.guard';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoggedGuard],
    loadChildren: () => import('./logged-base/logged-base.module').then(m => m.LoggedBaseModule)
  },
  {
    path: 'auth',
    canActivate: [UnloggedGuard],
    loadChildren: () => import('./unlogged-base/unlogged-base.module').then(m => m.UnloggedBaseModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
