import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MateriaDesignModule } from './material-design/material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ActivityCardComponent } from './components/activity-card/activity-card.component';
import { AboutComponent } from './components/about/about.component';
import { ActivityFormComponent } from './components/activity-form/activity-form.component';

const appRoutes: Routes = [
  { path: '', component: ActivitiesComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    AboutComponent,
    FooterComponent,
    ActivitiesComponent,
    ActivityCardComponent,
    ActivityFormComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    BrowserAnimationsModule,
    MateriaDesignModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
