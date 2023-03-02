import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>(); // to be removed
  private subjectForm = new Subject<any>();
  private subjectEdit = new Subject<any>();
  private showActivityForm: boolean = false;
  private showEditActivityForm: boolean = false;

  constructor() {}

  toggleActivityForm(): void {
    this.showActivityForm = !this.showActivityForm;
    this.subjectForm.next(this.showActivityForm);
    console.log('add form: ' + this.showActivityForm);
    console.log('edit form: ' + this.showEditActivityForm);
  }

  onToggleActivityForm(): Observable<any> {
    return this.subjectForm.asObservable();
  }

  toggleEditActivityForm(): void {
    this.showEditActivityForm = !this.showEditActivityForm;
    this.subjectEdit.next(this.showEditActivityForm);
    console.log('edit form: ' + this.showEditActivityForm);
    console.log('add form: ' + this.showActivityForm);
  }

  onToggleEditActivityForm(): Observable<any> {
    return this.subjectEdit.asObservable();
  }

  // everything below to be removed

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
