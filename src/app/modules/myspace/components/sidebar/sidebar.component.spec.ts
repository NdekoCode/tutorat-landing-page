import { ComponentFixture, TestBed } from '@angular/core/testing'

import {
  GoogleLoginProvider,
  SocialAuthServiceConfig
} from '@abacritt/angularx-social-login'
import { HttpClientModule } from '@angular/common/http'
import { ActivatedRoute, RouterModule } from '@angular/router'
import { AuthService } from 'src/app/shared/services/auth/auth.service'
import { SidebarComponent } from './sidebar.component'

describe('SidebarComponent', () => {
  let component: SidebarComponent
  let fixture: ComponentFixture<SidebarComponent>

  beforeEach(async () => {
    const activatedRouteMock = {
      snapshot: {
        params: { id: 123 } // Définissez ici la valeur que vous souhaitez pour le paramètre id
      }
    }
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      imports: [HttpClientModule, RouterModule],

      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        AuthService,
        {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [
              {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider('')
              }
            ]
          } as SocialAuthServiceConfig
        }
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(SidebarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
