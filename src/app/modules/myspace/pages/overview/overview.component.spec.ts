import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { environment } from 'src/environments/environment'
import { OverviewComponent } from './overview.component'
describe('OverviewComponent', () => {
  let component: OverviewComponent
  let fixture: ComponentFixture<OverviewComponent>

  beforeEach(async () => {
    const activatedRouteMock = {
      snapshot: {
        params: { id: 123 } // La valeur que nous souhaitons pour le paramètre id
      }
    }
    await TestBed.configureTestingModule({
      declarations: [OverviewComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireStorageModule
      ]
    }).compileComponents()
    fixture = TestBed.createComponent(OverviewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should set userId property from activated route snapshot', () => {
    component.ngOnInit()
    expect(component.userId).toBeDefined()
  })
})
