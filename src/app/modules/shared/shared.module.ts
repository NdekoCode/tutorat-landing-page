import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [HttpClientModule, ReactiveFormsModule]
})
export class SharedModule {}
