import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccDeleteComponent } from './acc-delete.component';

describe('AccDeleteComponent', () => {
  let component: AccDeleteComponent;
  let fixture: ComponentFixture<AccDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
