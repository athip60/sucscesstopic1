import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { CreateComponent } from './create/create.component';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create',
    component: CreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'viewdata/:dataId',
    component: ViewdataComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit/:dataId',
    component: EditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'hero',
    component: HeroComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
