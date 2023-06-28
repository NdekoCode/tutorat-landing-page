import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SharedModule } from './modules/shared/shared.module'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthModule } from './modules/auth/auth.module'
import { MySpaceModule } from './modules/myspace/myspace.module'
import { InputContainerComponent } from './shared/components/input-container/input-container.component'
import { InputComponent } from './shared/components/input/input.component'

@NgModule({
  declarations: [AppComponent, InputComponent, InputContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    MySpaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
