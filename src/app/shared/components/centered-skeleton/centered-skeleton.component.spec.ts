import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CenteredSkeletonComponent } from './centered-skeleton.component'

describe('CenteredSkeletonComponent', () => {
  let component: CenteredSkeletonComponent
  let fixture: ComponentFixture<CenteredSkeletonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CenteredSkeletonComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(CenteredSkeletonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
