import { Component, Input, OnChanges } from '@angular/core';
import { Skill } from '../../../model/Skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnChanges {

  @Input() isLoggedIn: boolean = false;
  @Input() skills?: Skill[];
  hardSkills: Skill[] = [];
  softSkills: Skill[] = []

  selectedSkill?: Skill;

  ngOnChanges() {
    this.separateHardAndSoftSkills();
  }

  changeSelectedSkill(skill: Skill) {

    this.selectedSkill = skill;

  }

  private separateHardAndSoftSkills() {

    this.hardSkills = [];
    this.softSkills = [];

    if (this.skills) {

      for (let skill of this.skills!) {
        if (skill.getIsSoft()) {
          this.softSkills.push(skill);
        } else {
          this.hardSkills.push(skill);
        }
      }

    }


  }

}
