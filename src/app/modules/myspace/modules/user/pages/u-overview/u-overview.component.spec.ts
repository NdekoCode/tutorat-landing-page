import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { UOverviewComponent } from './u-overview.component'

describe('OverviewComponent', () => {
  const activatedRouteMock = {
    snapshot: {
      params: { id: 123 } // Définissez ici la valeur que vous souhaitez pour le paramètre id
    }
  }
  let component: UOverviewComponent
  let fixture: ComponentFixture<UOverviewComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UOverviewComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
      imports: [RouterTestingModule]
    }).compileComponents()
    fixture = TestBed.createComponent(UOverviewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
  it('should set userId property from activated route snapshot', () => {
    component.ngOnInit()
    expect(component.userId).toBeDefined()
    // Faites des assertions supplémentaires sur la valeur de userId si nécessaire
  })
})
