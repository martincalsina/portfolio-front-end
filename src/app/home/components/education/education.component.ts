import { Component, Input } from '@angular/core';
import { Education } from '../../../model/Education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  @Input() educations?: Education[];

  selectedEducation: Education | undefined;

  changeSelectedEducation(education: Education): void {
    this.selectedEducation = education;
  }

}
