import { Component } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Family } from '../../models/family';
import { Equipment } from '../../models/equipment';
import { EquipmentServiceService } from '../../services/equipment-service.service';

@Component({
  selector: 'app-add-modal',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-modal.component.html',
  styleUrl: './add-modal.component.css'
})
export class AddModalComponent {
  itemForm: FormGroup;
  categories: Family[] = [];
  toSave: Equipment = new Equipment();

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private equipmentService: EquipmentServiceService,) {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.toSave);
    this.equipmentService.addEquipment(this.toSave).subscribe({
      next: data => {
      },
      error : (err)=>{ console.log(err)},  
    })
    this.activeModal.close('Save click');
  }

}
