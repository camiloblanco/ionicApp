import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutPublicComponent } from './layouts/layout-public/layout-public.component';
import { LayoutPrivateComponent } from './layouts/layout-private/layout-private.component';
import { AccesoComponent } from './pages/acceso/acceso.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPublicComponent,
    children: [
      {
        path: '',
        component: AccesoComponent,
      },
    ],
  },
  {
    path: '',
    component: LayoutPrivateComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
