import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftComponent } from './components/left/left.component';
import { RightComponent } from './components/right/right.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LeftComponent,
    RightComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [FooterComponent,
    HeaderComponent,
    LeftComponent,
    RightComponent,
    RouterModule,
    FlexLayoutModule
  ],
})
export class SharedModule { }
