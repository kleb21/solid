import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { ProjectsComponent } from './projects/projects.component';
import { TasksDetailsComponent } from './tasks-details/tasks-details.component';
import { TasksService } from './services/tasks.service';
import { ProjectsService } from './services/projects.service';
import { NavbarComponent } from './navbar/navbar.component';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { ProjectsAddComponent } from './projects-add/projects-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ProjectsComponent,
    TasksDetailsComponent,
    NavbarComponent,
    ProjectsAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    TasksService,
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
