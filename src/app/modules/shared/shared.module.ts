import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { HomeModule } from './../home/home.module'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [ReactiveFormsModule, HomeModule]
})
export class SharedModule {}
