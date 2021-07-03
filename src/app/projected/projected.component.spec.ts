import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectedComponent } from './projected.component';

describe('ProjectedComponent', () => {
  let component: ProjectedComponent;
  let fixture: ComponentFixture<ProjectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
