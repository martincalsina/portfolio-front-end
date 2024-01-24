import { Component, Input } from '@angular/core';
import { Education } from '../../../../model/Education';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-delete-education',
  templateUrl: './delete-education.component.html',
  styleUrl: './delete-education.component.css'
})
export class DeleteEducationComponent {

  @Input() educationToDelete?: Education;

  constructor(private dataService: DataService) {
    
  }

  deleteEducation() {

    this.dataService.getLoadingSubject().next(true);

    this.dataService.deleteEducation(this.educationToDelete!.getId()).subscribe(r => {
      console.log("The education was successfully deleted", r);
      this.dataService.getEducationSubject().next();
      this.dataService.getLoadingSubject().next(false);
    }, error => {
      console.log("The education couldn't been deleted", error);
      this.dataService.getLoadingSubject().next(false);
    }); 

  }

}
