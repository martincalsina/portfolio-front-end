import { Component, Input, OnInit } from '@angular/core';
import { Education } from '../../../model/Education';
import { Subscription } from 'rxjs';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  @Input() educations?: Education[];


  selectedEducation: Education | undefined;

  constructor() {
    
  }

  changeSelectedEducation(education: Education): void {
    this.selectedEducation = education;
  }

}
