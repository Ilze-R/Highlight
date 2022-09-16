import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenGroupsComponent } from './open-groups.component';

describe('OpenGroupsComponent', () => {
  let component: OpenGroupsComponent;
  let fixture: ComponentFixture<OpenGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
