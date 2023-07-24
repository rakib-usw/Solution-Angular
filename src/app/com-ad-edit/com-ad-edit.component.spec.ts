import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComAdEditComponent } from './com-ad-edit.component';

describe('ComAdEditComponent', () => {
  let component: ComAdEditComponent;
  let fixture: ComponentFixture<ComAdEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComAdEditComponent]
    });
    fixture = TestBed.createComponent(ComAdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
