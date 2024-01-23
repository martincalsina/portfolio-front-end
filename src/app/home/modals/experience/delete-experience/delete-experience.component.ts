import { Component, Input } from '@angular/core';
import { Experience } from '../../../../model/Experience';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-delete-experience',
  templateUrl: './delete-experience.component.html',
  styleUrl: './delete-experience.component.css'
})
export class DeleteExperienceComponent {

  @Input() experienceToDelete?: Experience;

  constructor(private dataService: DataService) {}

  deleteExperience() {

    this.dataService.deleteExperience(this.experienceToDelete!.getId()).subscribe(r => {
      console.log("The experience was successfully deleted", r);
      this.dataService.getExperienceSubject().next();
    }, error => {
      console.log("The experience couldn't been deleted", error);
    }); 

  }

}
