import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { Activity, FormData } from 'src/app/Activity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
})
export class ActivitiesComponent implements OnInit {
  activities: Activity[] = [];
  formData: Activity;

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

  editActivity(activity: Activity) {
    this.formData = { ...activity };
  }

  updateActivity(activity: Activity) {
    this.activityService.updateActivity(activity).subscribe((activity) => {
      this.activities = this.activities.map((a) =>
        a.id === activity.id ? activity : a
      );
    });
  }

  deleteActivity(activity: Activity) {
    this.activityService.deleteActivity(activity).subscribe(() => {
      this.activities = this.activities.filter((a) => a.id !== activity.id);
    });
  }
}
