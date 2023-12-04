import { EquipmentServiceService } from './../../services/equipment-service.service';
import { Component } from '@angular/core';
import { Equipment } from '../../models/equipment';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css'
})
export class EquipmentComponent {
  equipments: Equipment[] = [];
  toSave: Equipment = new Equipment();

  
  constructor(private equipmentService: EquipmentServiceService){}

  ngOnInit(): void {

    this.equipmentService.getEquipments().subscribe((data: Equipment[]) => {
      this.equipments = data;
    })
  }

  onSubmit(){
    console.log(this.toSave);
    this.equipmentService.addEquipments(this.toSave).subscribe({
      next: data => {
        this.onSuccessSave(data?.result);
      },
      error : (err)=>{ console.log(err)},  
    })
  }

  onSuccessSave(equipment?: Equipment) {
    if(equipment)
      this.equipments.push(equipment);
  }
}
