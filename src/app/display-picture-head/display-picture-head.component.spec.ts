import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPictureHeadComponent } from './display-picture-head.component';

describe('DisplayPictureHeadComponent', () => {
  let component: DisplayPictureHeadComponent;
  let fixture: ComponentFixture<DisplayPictureHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPictureHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPictureHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
