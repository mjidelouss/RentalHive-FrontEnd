import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsCalendarComponent } from './equipments-calendar.component';

describe('EquipmentsCalendarComponent', () => {
  let component: EquipmentsCalendarComponent;
  let fixture: ComponentFixture<EquipmentsCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquipmentsCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipmentsCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
