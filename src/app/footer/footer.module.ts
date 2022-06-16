import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RRSSComponent } from './rrss/rrss.component';



@NgModule({
  declarations: [
    RRSSComponent
  ],
  exports: [RRSSComponent],
  imports: [
    CommonModule
  ]
})
export class FooterModule { }
