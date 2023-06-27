import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SharedModule } from './modules/shared/shared.module'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeModule } from './modules/home/home.module'
import { InputContainerComponent } from './shared/components/input-container/input-container.component'
import { InputComponent } from './shared/components/input/input.component'

@NgModule({
  declarations: [AppComponent, InputComponent, InputContainerComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
