import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Experience } from '../../../../model/Experience';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../services/data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrl: './edit-experience.component.css'
})
export class EditExperienceComponent implements OnInit, OnChanges {

  @Input() experienceToEdit?: Experience;

  public experienceForm?: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService, private datePipe: DatePipe) {}

  ngOnInit(): void {

    this.experienceForm = this.fb.group({
      institution: ['', [Validators.required, Validators.maxLength(150)]],
      position: ['', [Validators.required, Validators.maxLength(150)]],
      startDate: ['', [Validators.required]],
      isWorking: [false],
      endDate: [''],
      description: ['', [Validators.required, Validators.maxLength(300)]],
    });

  }

  ngOnChanges(changes: SimpleChanges): void {

    const formattedStartDate = this.datePipe.transform(this.experienceToEdit?.getStartDate(), 'yyyy-MM-dd');
    const formattedEndDate = this.experienceToEdit?.getEndDate() ? this.datePipe.transform(this.experienceToEdit.getEndDate(), 'yyyy-MM-dd') : null;
    let isWorking = false;

    if (formattedEndDate == null) {
      isWorking = true;
    }

    console.log(formattedStartDate);
    console.log(formattedEndDate);
    console.log(isWorking);

    this.experienceForm = this.fb.group({
      institution: [this.experienceToEdit?.getInstitution(), [Validators.required, Validators.maxLength(150)]],
      position: [this.experienceToEdit?.getPosition(), [Validators.required, Validators.maxLength(150)]],
      startDate: [formattedStartDate, [Validators.required]],
      isWorking: [isWorking],
      endDate: [formattedEndDate],
      description: [this.experienceToEdit?.getDescription(), [Validators.required, Validators.maxLength(300)]],
    });

  }

  public touchedAndValid(formControlName: string): boolean {
    return this.experienceForm!.get(formControlName)!.valid && this.experienceForm!.get(formControlName)!.touched;
  }

  public touchedAndInvalid(formControlName: string): boolean {
    return this.experienceForm!.get(formControlName)!.invalid && this.experienceForm!.get(formControlName)!.touched;
  }

  onSubmit(): void {
    if (this.experienceForm?.valid) {

      this.dataService.getLoadingSubject().next(true);

      console.log(this.experienceForm?.value);

      const formValues = this.experienceForm.value;

      console.log(formValues);

      const userId = parseInt(sessionStorage.getItem('userId')!);

      const startDateValue: string = formValues.startDate;
      const startDate: Date = new Date(startDateValue);
      
      let experience: Experience = new Experience(
        this.experienceToEdit!.getId(),
        formValues.institution,
        formValues.position,
        formValues.description,
        startDate,
        formValues.endDate,
        userId
      );

      this.dataService.editExperience(experience).subscribe(r => {
        console.log("Experience successfully edited", r);
        this.dataService.getExperienceSubject().next();
        this.experienceForm?.reset;
        this.dataService.getLoadingSubject().next(false);
      }, error => {
        console.log("The experience couldn't been edited", error);
        this.dataService.getLoadingSubject().next(false);
      });

    } else {
      console.log(this.experienceForm?.value)
      console.log("The form is invalid, check it out");
    }
  }


}
