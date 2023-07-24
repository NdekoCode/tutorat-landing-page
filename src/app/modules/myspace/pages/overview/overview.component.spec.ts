import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { OverviewComponent } from './overview.component'
describe('OverviewComponent', () => {
  let component: OverviewComponent
  let fixture: ComponentFixture<OverviewComponent>

  beforeEach(async () => {
    const activatedRouteMock = {
      snapshot: {
        params: { id: 123 } // Définissez ici la valeur que vous souhaitez pour le paramètre id
      }
    }
    await TestBed.configureTestingModule({
      declarations: [OverviewComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
      imports: [RouterTestingModule, HttpClientTestingModule]
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
