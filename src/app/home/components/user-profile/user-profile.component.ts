import { Component, Input, OnChanges } from '@angular/core';
import { User } from '../../../model/User';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnChanges {

  @Input() isLoggedIn: boolean = false;
  @Input() user?: User;
  //public user?: User;

  showTextArea: boolean = false;
  editedDescription: string = "";

  constructor(private dataService: DataService) {}

  ngOnChanges() {
  
  }

  changeTextAreaVisibility(visibility: boolean) {
    this.showTextArea = visibility;
  }

  changeEditedDescription(description: string) {
    this.editedDescription = description;
    console.log("edited description", this.editedDescription);
  }

  editDescription() {

    this.changeTextAreaVisibility(false);

    setTimeout(() => {
      this.user?.setDescription(this.editedDescription);

    this.dataService.editUser(this.user!).subscribe( r => {
      console.log("The description was successfully edited", r);
      this.dataService.getUserSubject().next();
    }, error => {
      console.log("The description couldn't been edited", error);
    }) 

    }, 1000);

  }
   

}
