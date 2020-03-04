import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigateComponent } from './top-navigate/top-navigate.component';



@NgModule({
  declarations: [TopNavigateComponent],
  imports: [
    CommonModule
  ],
  exports: [TopNavigateComponent]
})
export class TopNavigationModule { }
