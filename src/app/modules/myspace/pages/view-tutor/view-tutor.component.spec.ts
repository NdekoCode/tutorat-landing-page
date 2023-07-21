import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ActivatedRoute } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { ViewTutorComponent } from './view-tutor.component'

describe('ViewTutorComponent', () => {
  let component: ViewTutorComponent
  let fixture: ComponentFixture<ViewTutorComponent>

  beforeEach(async () => {
    const activatedRouteMock = {
      snapshot: {
        params: { id: 123 } // La valeur que nous souhaitons pour le paramètre id
      },
      fragment: {
        subscribe: jest.fn()
      }
    }
    await TestBed.configureTestingModule({
      declarations: [ViewTutorComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteMock }],
      imports: [RouterTestingModule]
    }).compileComponents()

    fixture = TestBed.createComponent(ViewTutorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
