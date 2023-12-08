import { Component } from '@angular/core';
import { Family } from '../../models/family';
import { Equipment } from '../../models/equipment';
import { EquipmentServiceService } from '../../services/equipment-service.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,],
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.css'
})
export class EditModalComponent {
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
    this.equipmentService.getFamilys().subscribe((data: Family[]) => {
      this.categories = data;
    })
  }

  onSubmit() {
    this.activeModal.close('Save click');
  }
}
