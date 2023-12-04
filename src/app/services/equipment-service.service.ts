import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Equipment } from '../models/equipment';
import { ResponseModel } from '../core/request/response.model'

const httpOptions = {
  headers: new HttpHeaders({'Content-type' : 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class EquipmentServiceService {

  private apiUrl = "http://localhost:8082/api/equipment";
  private savedEquipment: Equipment | null = null;

  constructor(private http: HttpClient) { }

  getEquipments(): Observable<Equipment[]>{
    return this.http.get<Equipment[]>(this.apiUrl).pipe(
        map((res: any) => res.result)
    )
  }

  addEquipments(equipment: Equipment): Observable<ResponseModel<Equipment>>{
    return  this.http.post<ResponseModel<Equipment>>(this.apiUrl, equipment);
  }
}
