import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Education } from '../../../model/Education';
import { Subscription } from 'rxjs';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnChanges {

  @Input() isLoggedIn: boolean = false;
  @Input() educations?: Education[];


  selectedEducation: Education | undefined;

  constructor() {
    
  }

  ngOnChanges() {

    if (this.educations) {
      this.educations = this.sortEducations(this.educations);
    }

  }

  private sortEducations(educations: Education[]): Education[] {
    return educations.sort((a, b) => {
      
      const endDateComparison = this.compareDates(b.getEndDate(), a.getEndDate());
  
      return endDateComparison === 0 ? this.compareDates(b.getStartDate(), a.getStartDate()) : endDateComparison;
    });
  }

  private compareDates(dateA: Date | null, dateB: Date | null): number {
    if (dateA === null && dateB === null) {
      return 0;
    }
    if (dateA === null) {
      return 1;
    }
    if (dateB === null) {
      return -1
    }
    return dateA.getTime() - dateB.getTime();
  }


  changeSelectedEducation(education: Education): void {
    this.selectedEducation = education;
  }

}
