import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierpersonnelComponent } from './dossierpersonnel.component';

describe('DossierpersonnelComponent', () => {
  let component: DossierpersonnelComponent;
  let fixture: ComponentFixture<DossierpersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DossierpersonnelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DossierpersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
