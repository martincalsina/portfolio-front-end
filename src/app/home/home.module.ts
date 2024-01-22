import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
