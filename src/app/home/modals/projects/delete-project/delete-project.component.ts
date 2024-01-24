import { Component, Input } from '@angular/core';
import { DataService } from '../../../../services/data.service';
import { Project } from '../../../../model/Project';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrl: './delete-project.component.css'
})
export class DeleteProjectComponent {

  @Input() projectToDelete?: Project;

  constructor(private dataService: DataService) {}

  deleteProject() {

    this.dataService.getLoadingSubject().next(true);

    this.dataService.deleteProject(this.projectToDelete!.getId()).subscribe(r => {
      console.log("The project was deleted successfully", r);
      this.dataService.getProjectsSubject().next();
      this.dataService.getLoadingSubject().next(false);
    }, error => {
      console.log("The project couldn't been deleted.", error);
      this.dataService.getLoadingSubject().next(false);
    });

  }

}
