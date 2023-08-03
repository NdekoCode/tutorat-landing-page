import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InlineCardSkeletonComponent } from './inline-card-skeleton.component'

describe('InlineCardSkeletonComponent', () => {
  let component: InlineCardSkeletonComponent
  let fixture: ComponentFixture<InlineCardSkeletonComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InlineCardSkeletonComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(InlineCardSkeletonComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
