import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Activity } from 'src/app/ActivityTypes';
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
  @Output() onEditBtnClick: EventEmitter<Activity> = new EventEmitter();
  @Output() onDeleteActivity: EventEmitter<Activity> = new EventEmitter();

  faTimes = faTimes;
  faPenToSquare = faPenToSquare;

  showActivityForm: boolean;
  showEditActivityForm: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggleActivityForm()
      .subscribe((value) => (this.showActivityForm = value));
  }

  ngOnInit(): void {}

  onEdit(activity: Activity) {
    this.uiService.onToggleActivityForm();
    this.onEditBtnClick.emit(activity);
  }

  onDelete(activity: Activity) {
    this.onDeleteActivity.emit(activity);
  }
}
