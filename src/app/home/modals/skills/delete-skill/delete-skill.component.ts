import { Component, Input } from '@angular/core';
import { Skill } from '../../../../model/Skill';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-delete-skill',
  templateUrl: './delete-skill.component.html',
  styleUrl: './delete-skill.component.css'
})
export class DeleteSkillComponent {

  @Input() skillToDelete?: Skill;

  constructor(private dataService: DataService) {}

  deleteSkill() {

    this.dataService.getLoadingSubject().next(true);

    this.dataService.deleteSkill(this.skillToDelete!.getId()).subscribe(r => {
      console.log("The skill was successfully deleted", r);
      this.dataService.getSkillsSubject().next();
      this.dataService.getLoadingSubject().next(false);
    }, error => {
      console.log("The skill couldn't been deleted", error);
      this.dataService.getLoadingSubject().next(false);
    }); 

  }

}
