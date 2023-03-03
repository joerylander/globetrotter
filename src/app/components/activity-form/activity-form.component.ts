import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Activity } from 'src/app/ActivityTypes';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css'],
})
export class ActivityFormComponent implements OnInit, OnChanges {
  @Input() formData: Activity;
  @Output() onAddActivity: EventEmitter<Activity> = new EventEmitter();
  @Output() onEditActivity: EventEmitter<Activity> = new EventEmitter();

  id: number;
  name: string;
  from: string;
  to: string;
  price: number = 0;
  numOfPpl: number = 1;
  notes: string;

  isEditingExistingActivity: boolean;
  showActivityForm: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggleActivityForm()
      .subscribe((value) => (this.showActivityForm = value));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['formData']?.['currentValue']) {
      const { id, name, from, to, price, numOfPpl, notes } =
        changes['formData']['currentValue'];
      this.id = id;
      this.name = name;
      this.from = from;
      this.to = to;
      this.price = price;
      this.numOfPpl = numOfPpl;
      this.notes = notes;

      this.showActivityForm = true;
      this.isEditingExistingActivity = true;
    }
  }

  ngOnInit(): void {}

  onSubmitEdited() {
    if (!this.name) {
      alert('Please add an activity');
      return;
    }

    const updatedActivity = {
      id: this.id,
      name: this.name,
      from: this.from,
      to: this.to,
      price: this.price,
      numOfPpl: this.numOfPpl,
      notes: this.notes,
    };

    this.onEditActivity.emit(updatedActivity);

    this.isEditingExistingActivity = false;
    this.showActivityForm = false;
    this.name = '';
    this.from = '';
    this.to = '';
    this.price = 0;
    this.numOfPpl = 1;
    this.notes = '';
  }

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

    this.showActivityForm = false;
    this.name = '';
    this.from = '';
    this.to = '';
    this.price = 0;
    this.numOfPpl = 1;
    this.notes = '';
  }
}
