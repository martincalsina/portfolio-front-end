import { Component, Input } from '@angular/core';
import { Project } from '../../../model/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  @Input() isLoggedIn: boolean = false;
  @Input() projects?: Project[];

  selectedProject?: Project;

  changeSelectedProject(project: Project): void {
    this.selectedProject = project;
  }

  handleImageError(project: Project): void {
    project.setPicture("../../../../assets/martin_icon.png");
  }

}
