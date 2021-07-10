import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutPublicComponent } from './layout-public.component';
import { AccesoComponent } from 'src/app/pages/acceso/acceso.component';



@NgModule({
  declarations: [LayoutPublicComponent, AccesoComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class LayoutPublicModule { }
