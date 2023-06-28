import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ActivatedRoute } from '@angular/router'
import { OverviewComponent } from './overview.component'

describe('OverviewComponent', () => {
  let component: OverviewComponent
  let fixture: ComponentFixture<OverviewComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverviewComponent],
      imports: [ActivatedRoute]
    }).compileComponents()

    fixture = TestBed.createComponent(OverviewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
