import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutPrivateComponent } from './layout-private.component';
import { HomeComponent } from 'src/app/pages/home/home.component';



@NgModule({
  declarations: [LayoutPrivateComponent, HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class LayoutPrivateModule { }
