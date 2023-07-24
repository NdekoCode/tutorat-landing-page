import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ShipInputComponent } from './ship-input.component'

describe('ShipInputComponent', () => {
  let component: ShipInputComponent
  let fixture: ComponentFixture<ShipInputComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShipInputComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ShipInputComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
