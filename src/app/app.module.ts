import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SharedModule } from './modules/shared/shared.module'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ErrorComponent } from './components/error/error.component'
import { AuthModule } from './modules/auth/auth.module'
import { MySpaceModule } from './modules/myspace/myspace.module'
import { PublicModule } from './modules/public/public.module'
import { InputContainerComponent } from './shared/components/input-container/input-container.component'
import { InputGroupComponent } from './shared/components/input-group/input-group.component'
import { InputComponent } from './shared/components/input/input.component'
import { ScrollHideDirective } from './shared/directives/scroll-hide.directive'
import { ScrollDirective } from './shared/directives/scroll.directive'
import { SafePipe } from './shared/pipes/safe.pipe'

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    ScrollHideDirective,
    ScrollDirective,
    InputComponent,
    InputContainerComponent,
    ErrorComponent,
    InputGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    MySpaceModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
