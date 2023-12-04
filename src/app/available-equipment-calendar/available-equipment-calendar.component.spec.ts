import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableEquipmentCalendarComponent } from './available-equipment-calendar.component';

describe('AvailableEquipmentCalendarComponent', () => {
  let component: AvailableEquipmentCalendarComponent;
  let fixture: ComponentFixture<AvailableEquipmentCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableEquipmentCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailableEquipmentCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
