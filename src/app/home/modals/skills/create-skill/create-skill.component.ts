import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../services/data.service';
import { Skill } from '../../../../model/Skill';

@Component({
  selector: 'app-create-skill',
  templateUrl: './create-skill.component.html',
  styleUrl: './create-skill.component.css'
})
export class CreateSkillComponent {

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

  public touchedAndValid(formControlName: string): boolean {
    return this.skillForm!.get(formControlName)!.valid && this.skillForm!.get(formControlName)!.touched;
  }

  public touchedAndInvalid(formControlName: string): boolean {
    return this.skillForm!.get(formControlName)!.invalid && this.skillForm!.get(formControlName)!.touched;
  }

  onSubmit(): void {

    if (this.skillForm?.valid) {

      this.dataService.getLoadingSubject().next(true);

      console.log(this.skillForm?.value);

      const formValues = this.skillForm.value;

      console.log(formValues);

      const userId = parseInt(sessionStorage.getItem('userId')!);
      
      let skill: Skill = new Skill(
        0,
        formValues.name,
        formValues.description,
        formValues.icon,
        formValues.isSoft,
        userId
      );

      this.dataService.createSkill(skill).subscribe(r => {
        console.log("Skill successfully created", r);
        this.dataService.getSkillsSubject().next();
        this.dataService.getLoadingSubject().next(false);
        this.skillForm?.reset;
      }, error => {
        console.log("The skill couldn't been created", error);
        this.dataService.getLoadingSubject().next(false);
      });

    } else {
      console.log(this.skillForm?.value)
      console.log("The form is invalid, check it out");
    }
  }

}
