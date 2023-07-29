import { NgModule } from '@angular/core'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SharedModule } from './shared/shared.module'

import {
  GoogleLoginProvider,
  GoogleSigninButtonModule,
  SocialAuthServiceConfig,
  SocialLoginModule
} from '@abacritt/angularx-social-login'
import { environment } from 'src/environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthModule } from './modules/auth/auth.module'
import { MySpaceModule } from './modules/myspace/myspace.module'
import { PublicModule } from './modules/public/public.module'
import { ErrorComponent } from './shared/components/error/error.component'
import { InputContainerComponent } from './shared/components/input-container/input-container.component'
import { ScrollHideDirective } from './shared/directives/scroll-hide.directive'
import { SafePipe } from './shared/pipes/safe.pipe'
@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    ScrollHideDirective,
    InputContainerComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    MySpaceModule,
    PublicModule,
    BrowserAnimationsModule,
    GoogleSigninButtonModule,
    SocialLoginModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.GOOGLE_CLIENT_ID)
          }
        ],
        onError: (err) => {}
      } as SocialAuthServiceConfig
    }
    // A partir de ce moment là le tokenInterceptorProvider est tout le temps actif, il est tout le temps entrer de travailler
    // AuthInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
