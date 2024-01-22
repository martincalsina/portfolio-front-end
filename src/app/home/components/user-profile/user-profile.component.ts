import { Component, Input, OnChanges } from '@angular/core';
import { User } from '../../../model/User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnChanges {

  @Input() user?: User;
  //public user?: User;

  constructor() {}

  ngOnChanges() {
  
  }
   

}
