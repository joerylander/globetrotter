import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../Activity';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private apiUrl = 'http://localhost:5000/activities';

  constructor(private http: HttpClient) {}

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.apiUrl);
  }

  addActivity(activitiy: Activity): Observable<Activity> {
    return this.http.post<Activity>(this.apiUrl, activitiy, httpOptions);
  }

  updateActivity(activity: Activity): Observable<Activity> {
    const url = `${this.apiUrl}/${activity.id}`;
    return this.http.put<Activity>(url, activity, httpOptions);
  }

  deleteActivity(activity: Activity): Observable<Activity> {
    const url = `${this.apiUrl}/${activity.id}`;
    return this.http.delete<Activity>(url);
  }
}
