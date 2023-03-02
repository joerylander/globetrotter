import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Activity } from 'src/app/Activity';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-edit-activity-form',
  templateUrl: './edit-activity-form.component.html',
  styleUrls: ['./edit-activity-form.component.css'],
})
export class EditActivityFormComponent implements OnInit {
  @Output() onEditActivity: EventEmitter<Activity> = new EventEmitter();
  // name: string;
  // from: string;
  // to: string;
  // price: number = 0;
  // numOfPpl: number = 1;
  // notes: string;
  showEditActivityForm: boolean;
  subscription: Subscription;
  activity: Activity;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggleEditActivityForm()
      .subscribe((value) => (this.showEditActivityForm = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.activity.name) {
      alert('Please add an activity');
      return;
    }

    const editActivity = {
      name: this.activity.name,
      from: this.activity.from,
      to: this.activity.to,
      price: this.activity.price,
      numOfPpl: this.activity.numOfPpl,
      notes: this.activity.notes,
    };

    this.onEditActivity.emit(editActivity);

    // Clear form
    this.activity.name = '';
    this.activity.from = '';
    this.activity.to = '';
    this.activity.price = 0;
    this.activity.numOfPpl = 1;
    this.activity.notes = '';
  }
}
