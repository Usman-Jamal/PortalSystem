import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private showButtonSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  showButton$: Observable<boolean> = this.showButtonSubject.asObservable();

  setShowButton(value: boolean): void {
    this.showButtonSubject.next(value);
  }
}
