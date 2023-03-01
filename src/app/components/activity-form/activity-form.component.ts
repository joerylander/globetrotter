import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Activity } from 'src/app/Activity';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css'],
})
export class ActivityFormComponent implements OnInit {
  @Output() onAddActivity: EventEmitter<Activity> = new EventEmitter();
  name: string;
  from: string;
  to: string;
  price: number = 0;
  numOfPpl: number = 1;
  notes: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.name) {
      alert('Please add an activity');
      return;
    }

    const newActivity = {
      name: this.name,
      from: this.from,
      to: this.to,
      price: this.price,
      numOfPpl: this.numOfPpl,
      notes: this.notes,
    };

    this.onAddActivity.emit(newActivity);

    // Clear form
    this.name = '';
    this.from = '';
    this.to = '';
    this.price = 0;
    this.numOfPpl = 1;
    this.notes = '';
  }
}
