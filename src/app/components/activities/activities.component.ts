import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { Activity } from 'src/app/Activity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  activities: Activity[] = [];

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.activityService
      .getActivities()
      .subscribe((activities) => (this.activities = activities));
  }

  addActivity(activity: Activity) {
    this.activityService
      .addActivity(activity)
      .subscribe((activity) => this.activities.push(activity));
  }

  deleteActivity(activity: Activity) {
    this.activityService.deleteActivity(activity).subscribe(() => {
      this.activities = this.activities.filter((a) => a.id !== activity.id);
    });
  }
}
