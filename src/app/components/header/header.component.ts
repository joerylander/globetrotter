import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ActivityFormComponent } from '../activity-form/activity-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Globetrotter';
  showActivityForm: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggleActivityForm()
      .subscribe((value) => (this.showActivityForm = value));
  }

  ngOnInit(): void {}

  toggleActivityForm() {
    this.uiService.toggleActivityForm();
  }

  // openFormDialog() {
  //   let dialogRef = this.dialog.open(ActivityFormComponent, {
  //     data: { name: 'Joe' },
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log(`Dialog result: ${result}`);
  //   });

  //   // if result == true, then add activity to list
  //   // if result == false, then do nothing
  // }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
