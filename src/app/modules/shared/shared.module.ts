import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { HomeModule } from './../home/home.module'
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [HttpClientModule, ReactiveFormsModule, HomeModule]
})
export class SharedModule {}
