import { ComponentFixture, TestBed } from '@angular/core/testing'

import { VerificationModalAnimationComponent } from './verification-modal-animation.component'

describe('VerificationModalAnimationComponent', () => {
  let component: VerificationModalAnimationComponent
  let fixture: ComponentFixture<VerificationModalAnimationComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerificationModalAnimationComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(VerificationModalAnimationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
