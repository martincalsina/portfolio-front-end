import { Component, Input } from '@angular/core';
import { Experience } from '../../../model/Experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  @Input() experiences?: Experience[];

}
