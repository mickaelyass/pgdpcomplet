import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewprofileComponent } from './addnewprofile.component';

describe('AddnewprofileComponent', () => {
  let component: AddnewprofileComponent;
  let fixture: ComponentFixture<AddnewprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddnewprofileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
