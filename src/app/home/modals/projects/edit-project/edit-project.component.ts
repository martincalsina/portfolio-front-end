import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../services/data.service';
import { Project } from '../../../../model/Project';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrl: './edit-project.component.css'
})
export class EditProjectComponent implements OnInit, OnChanges {

  @Input() projectToEdit?: Project;

  public projectForm?: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {

    this.projectForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.maxLength(200)]],
      url: ['', [Validators.required,  Validators.maxLength(255)]],
      picture: ['', [Validators.required, Validators.maxLength(255)]]});

  }

  ngOnChanges(changes: SimpleChanges): void {

    this.projectForm = this.fb.group({
      name: [this.projectToEdit?.getName(), [Validators.required, Validators.maxLength(100)]],
      description: [this.projectToEdit?.getDescription(), [Validators.required, Validators.maxLength(200)]],
      url: [this.projectToEdit?.getUrl(), [Validators.required,  Validators.maxLength(255)]],
      picture: [this.projectToEdit?.getPicture(), [Validators.required, Validators.maxLength(255)]]}
    );
    
  }

  public touchedAndValid(formControlName: string): boolean {
    return this.projectForm!.get(formControlName)!.valid && this.projectForm!.get(formControlName)!.touched;
  }

  public touchedAndInvalid(formControlName: string): boolean {
    return this.projectForm!.get(formControlName)!.invalid && this.projectForm!.get(formControlName)!.touched;
  }

  onSubmit(): void {
    if (this.projectForm?.valid) {

      this.dataService.getLoadingSubject().next(true);

      console.log(this.projectForm?.value);

      const formValues = this.projectForm.value;

      console.log(formValues);

      const userId = parseInt(sessionStorage.getItem('userId')!);

      const startDateValue: string = formValues.startDate;
      const startDate: Date = new Date(startDateValue);
      
      let project: Project = new Project(
        this.projectToEdit!.getId(),
        formValues.name,
        formValues.description,
        formValues.picture,
        formValues.url,
        userId
      );

      this.dataService.editProject(project).subscribe(r => {
        console.log("Project successfully edited", r);
        this.dataService.getProjectsSubject().next();
        this.projectForm?.reset;
        this.dataService.getLoadingSubject().next(false);
      }, error => {
        console.log("The project couldn't been edited", error);
        this.dataService.getLoadingSubject().next(false);
      });

    } else {
      console.log(this.projectForm?.value)
      console.log("The form is invalid, check it out");
    }
  }

}
