import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information/personal-information.component';
import { HomeComponent } from './components/home/home/home.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience/work-experience.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { AboutComponent } from './components/about/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonalInformationComponent,
    HomeComponent,
    FooterComponent,
    WorkExperienceComponent,
    ProjectComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
