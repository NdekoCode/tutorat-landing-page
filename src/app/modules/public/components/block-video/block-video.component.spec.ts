import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BlockVideoComponent } from './block-video.component'

describe('BlockVideoComponent', () => {
  let component: BlockVideoComponent
  let fixture: ComponentFixture<BlockVideoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockVideoComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(BlockVideoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
