import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HomeModule } from './../home/home.module'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [HomeModule, FormsModule]
})
export class SharedModule {}
