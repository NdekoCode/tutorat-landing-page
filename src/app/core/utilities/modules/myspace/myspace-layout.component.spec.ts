import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MyspaceLayoutComponent } from './myspace-layout.component'

describe('MyspaceLayoutComponent', () => {
  let component: MyspaceLayoutComponent
  let fixture: ComponentFixture<MyspaceLayoutComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyspaceLayoutComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(MyspaceLayoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
