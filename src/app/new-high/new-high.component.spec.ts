import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHighComponent } from './new-high.component';

describe('NewHighComponent', () => {
  let component: NewHighComponent;
  let fixture: ComponentFixture<NewHighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHighComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
