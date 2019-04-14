import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './404';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    children: [{
      path: '',
      loadChildren: './auth/auth.module#AuthModule'
    }]
  },
  {
    path: '',
    children: [{
      path: '',
      loadChildren: './home/home.module#HomeModule'
    }]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
