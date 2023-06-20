import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SharedModule } from './modules/shared/shared.module'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LoginComponent } from './modules/home/pages/login/login.component'
import { InputContainerComponent } from './shared/components/input-container/input-container.component'
import { InputComponent } from './shared/components/input/input.component'

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    InputContainerComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
