import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddenchereComponent } from './addenchere.component';

describe('AddenchereComponent', () => {
  let component: AddenchereComponent;
  let fixture: ComponentFixture<AddenchereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddenchereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddenchereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
