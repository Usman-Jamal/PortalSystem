import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  student_id: number = 0;
  admin_id: number = 0;
  constructor() { }
  setStudentId(id: number) 
  {
    this.student_id = id;
  }

  setAdminId(id: number) 
  {
    this.admin_id = id;
  }

  getStudentId(): number 
  {
    return this.student_id;
  }

  getAdminId(): number 
  {
    return this.admin_id;
  }
}
