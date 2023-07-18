import { ComponentFixture, TestBed } from '@angular/core/testing'

import { VerifyUserComponent } from './verify-user.component'

xdescribe('VerifyComponent', () => {
  let component: VerifyUserComponent
  let fixture: ComponentFixture<VerifyUserComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerifyUserComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(VerifyUserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  xit('should create', () => {
    expect(component).toBeTruthy()
  })
})
