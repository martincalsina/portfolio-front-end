import { Component, Input } from '@angular/core';
import { Experience } from '../../../model/Experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  @Input() isLoggedIn: boolean = false;
  @Input() experiences?: Experience[];

  selectedExperience?: Experience;

  ngOnChanges() {

    if (this.experiences) {
      this.experiences = this.sortExperiences(this.experiences);
    }

  }

  private sortExperiences(experiences: Experience[]): Experience[] {
    return experiences.sort((a, b) => {
      
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

  changeSelectedExperience(experience: Experience): void {
    this.selectedExperience = experience;
  }

}
