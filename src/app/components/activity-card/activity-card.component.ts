import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Activity } from 'src/app/Activity';
import { faTimes, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css'],
})
export class ActivityCardComponent implements OnInit {
  @Input() activity: Activity;
  @Output() onDeleteActivity: EventEmitter<Activity> = new EventEmitter();
  faTimes = faTimes;
  faPenToSquare = faPenToSquare;

  constructor() {}

  ngOnInit(): void {}

  onEdit(activity: Activity) {
    console.log('Edit activity: ' + activity);
  }

  onDelete(activity: Activity) {
    this.onDeleteActivity.emit(activity);
  }
}
