import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private subjectForm = new Subject<any>();
  private showActivityForm: boolean = false;

  constructor() {}

  toggleActivityForm(): void {
    this.showActivityForm = !this.showActivityForm;
    this.subjectForm.next(this.showActivityForm);
  }

  onToggleActivityForm(): Observable<any> {
    return this.subjectForm.asObservable();
  }
}
