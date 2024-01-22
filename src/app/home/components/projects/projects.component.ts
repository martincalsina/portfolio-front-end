import { Component, Input } from '@angular/core';
import { Project } from '../../../model/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  @Input() projects?: Project[];

  handleImageError(i: number): void {
        this.projects![i].setPicture("../../../../assets/martin_icon.png");
  }

}
