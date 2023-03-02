import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Activity } from 'src/app/Activity';
import { faTimes, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

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
  showEditActivityForm: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggleEditActivityForm()
      .subscribe((value) => (this.showEditActivityForm = value));
  }

  ngOnInit(): void {}

  editForm(activity: Activity) {
    console.log('Edit activity: ' + activity.id);
    this.uiService.toggleEditActivityForm();
  }

  onDelete(activity: Activity) {
    this.onDeleteActivity.emit(activity);
  }
}
