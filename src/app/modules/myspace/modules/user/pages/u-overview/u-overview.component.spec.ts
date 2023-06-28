import { ComponentFixture, TestBed } from '@angular/core/testing'

import { UOverviewComponent } from './u-overview.component'

describe('OverviewComponent', () => {
  let component: UOverviewComponent
  let fixture: ComponentFixture<UOverviewComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UOverviewComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(UOverviewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
