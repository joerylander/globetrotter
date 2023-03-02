import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';
import { AboutComponent } from './pages/about/about.component';
import { ActivityFormComponent } from './components/activity-form/activity-form.component';
import { EditActivityFormComponent } from './components/edit-activity-form/edit-activity-form.component';

const appRoutes: Routes = [
  { path: '', component: ActivitiesComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
    ActivitiesComponent,
    ActivityCardComponent,
    ActivityFormComponent,
    EditActivityFormComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
