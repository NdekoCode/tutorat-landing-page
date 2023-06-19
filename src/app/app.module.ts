import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { InputComponent } from './shared/components/input/input.component';
import { InputContainerComponent } from './shared/components/input-container/input-container.component'

@NgModule({
  declarations: [AppComponent, InputComponent, InputContainerComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
