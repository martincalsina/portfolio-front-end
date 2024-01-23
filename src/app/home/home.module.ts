import { NgModule } from '@angular/core';
import { CommonModule, DATE_PIPE_DEFAULT_TIMEZONE, DatePipe } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { NetworkComponent } from './components/network/network.component';
import { EditUserProfileComponent } from './modals/user-profile/edit-user-profile/edit-user-profile.component';
import { CreateEducationComponent } from './modals/education/create-education/create-education.component';
import { CreateExperienceComponent } from './modals/experience/create-experience/create-experience.component';
import { CreateSkillComponent } from './modals/skills/create-skill/create-skill.component';
import { CreateProjectComponent } from './modals/projects/create-project/create-project.component';
import { CreateNetworkComponent } from './modals/network/create-network/create-network.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEducationComponent } from './modals/education/edit-education/edit-education.component';
import { EditExperienceComponent } from './modals/experience/edit-experience/edit-experience.component';
import { EditSkillComponent } from './modals/skills/edit-skill/edit-skill.component';
import { EditProjectComponent } from './modals/projects/edit-project/edit-project.component';
import { EditNetworkComponent } from './modals/network/edit-network/edit-network.component';


@NgModule({
  declarations: [
    HomeComponent,
    TopBarComponent,
    UserProfileComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    NetworkComponent,
    EditUserProfileComponent,
    CreateEducationComponent,
    CreateExperienceComponent,
    CreateSkillComponent,
    CreateProjectComponent,
    CreateNetworkComponent,
    EditEducationComponent,
    EditExperienceComponent,
    EditSkillComponent,
    EditProjectComponent,
    EditNetworkComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe
  ]
})
export class HomeModule { }
