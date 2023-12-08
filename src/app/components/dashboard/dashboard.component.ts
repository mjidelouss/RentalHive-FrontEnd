import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Equipment } from '../../models/equipment';
import { EquipmentServiceService } from '../../services/equipment-service.service';
import { FormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  equipments: Equipment[] = [];
  toSave: Equipment = new Equipment();

  
  constructor(private equipmentService: EquipmentServiceService, private modalService: NgbModal){}

  ngOnInit(): void {

    this.equipmentService.getEquipments().subscribe((data: Equipment[]) => {
      this.equipments = data;
    })
  }

  openAddModal() {
    const modalRef = this.modalService.open(AddModalComponent);
  }

  openEditModal() {
    const modalRef = this.modalService.open(EditModalComponent);
  }

  onSubmit(){
    console.log(this.toSave);
    this.equipmentService.addEquipment(this.toSave).subscribe({
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

  deleteEquip(equipId: number) {
    this.equipmentService.deleteEquipment(equipId);
  }

}
