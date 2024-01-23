import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../services/data.service';
import { Skill } from '../../../../model/Skill';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrl: './edit-skill.component.css'
})
export class EditSkillComponent implements OnInit, OnChanges {

  @Input() skillToEdit?: Skill;
  
  public skillForm?: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {

    this.skillForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      icon: ['', [Validators.required, Validators.maxLength(100)]],
      isSoft: [false],
      description: ['', [Validators.required, Validators.maxLength(500)]],
    });

  }

  ngOnChanges(changes: SimpleChanges) {

    this.skillForm = this.fb.group({
      name: [this.skillToEdit?.getName(), [Validators.required, Validators.maxLength(100)]],
      icon: [this.skillToEdit?.getIcon(), [Validators.required, Validators.maxLength(100)]],
      isSoft: [this.skillToEdit?.getIsSoft()],
      description: [this.skillToEdit?.getDescription(), [Validators.required, Validators.maxLength(500)]],
    });

    
  }

  public touchedAndValid(formControlName: string): boolean {
    return this.skillForm!.get(formControlName)!.valid && this.skillForm!.get(formControlName)!.touched;
  }

  public touchedAndInvalid(formControlName: string): boolean {
    return this.skillForm!.get(formControlName)!.invalid && this.skillForm!.get(formControlName)!.touched;
  }

  onSubmit(): void {

    if (this.skillForm?.valid) {

      console.log(this.skillForm?.value);

      const formValues = this.skillForm.value;

      console.log(formValues);

      const userId = parseInt(sessionStorage.getItem('userId')!);
      
      let skill: Skill = new Skill(
        this.skillToEdit!.getId(),
        formValues.name,
        formValues.description,
        formValues.icon,
        formValues.isSoft,
        userId
      );

      this.dataService.editSkill(skill).subscribe(r => {
        console.log("Skill successfully edited", r);
        this.skillForm?.reset;
      }, error => {
        console.log("The skill couldn't been edited", error);
      });

    } else {
      console.log(this.skillForm?.value)
      console.log("The form is invalid, check it out");
    }
  }


}
