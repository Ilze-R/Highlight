import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHighComponent } from './create-high.component';

describe('CreateHighComponent', () => {
  let component: CreateHighComponent;
  let fixture: ComponentFixture<CreateHighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHighComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
