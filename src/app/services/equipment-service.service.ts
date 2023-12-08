import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Equipment } from '../models/equipment';
import { Family } from '../models/family';
import { ResponseModel } from '../core/request/response.model'

const httpOptions = {
  headers: new HttpHeaders({'Content-type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class EquipmentServiceService {

  private apiUrl = "http://localhost:8081/api/equipment";
  private apiFamilyUrl = "http://localhost:8081/api/equipment-family";
  private savedEquipment: Equipment | null = null;

  constructor(private http: HttpClient) { }

  getEquipments(): Observable<Equipment[]>{
    return this.http.get<Equipment[]>(this.apiUrl).pipe(
        map((res: any) => res.result)
    )
  }

  getFamilys(): Observable<Family[]> {
    return this.http.get<Family[]>(this.apiFamilyUrl).pipe(
      map((res: any) => res.result)
  )
  }

  addEquipment(equipment: Equipment): Observable<ResponseModel<Equipment>>{
    return  this.http.post<ResponseModel<Equipment>>(this.apiUrl, equipment);
  }

  updateEquipment(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:8081/api/equipment/${id}`, data);
  }

  deleteEquipment(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8081/api/equipment/${id}`);
  }
}
