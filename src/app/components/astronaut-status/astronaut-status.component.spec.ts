import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronautStatusComponent } from './astronaut-status.component';

describe('AstronautStatusComponent', () => {
  let component: AstronautStatusComponent;
  let fixture: ComponentFixture<AstronautStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstronautStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstronautStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
