import { Component, Input, OnChanges } from '@angular/core';
import { Skill } from '../../../model/Skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnChanges {

  @Input() skills?: Skill[];
  hardSkills: Skill[] = [];
  softSkills: Skill[] = []

  selectedSkill?: Skill;

  ngOnChanges() {
    this.separateHardAndSoftSkills();
  }

  changeSelectedSkill(index: number, isSoft: boolean) {

    if (isSoft) {
      this.selectedSkill = this.softSkills[index];
    } else {
      this.selectedSkill = this.hardSkills[index];
    }
  }

  private separateHardAndSoftSkills() {

    this.hardSkills = [];
    this.softSkills = [];

    for (let skill of this.skills!) {
      if (skill.getIsSoft()) {
        this.softSkills.push(skill);
      } else {
        this.hardSkills.push(skill);
      }
    }

  }

}
