import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideDisplayComponent } from './side-display.component';

describe('SideDisplayComponent', () => {
  let component: SideDisplayComponent;
  let fixture: ComponentFixture<SideDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
