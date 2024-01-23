import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../services/data.service';
import { Network } from '../../../../model/Network';

@Component({
  selector: 'app-edit-network',
  templateUrl: './edit-network.component.html',
  styleUrl: './edit-network.component.css'
})
export class EditNetworkComponent implements OnInit, OnChanges{

  @Input() networkToEdit?: Network;

  public networkForm?: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {

    this.networkForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      icon: ['', [Validators.required, Validators.maxLength(100)]],
      url: ['', [Validators.required,  Validators.maxLength(255)]]});

  }

  ngOnChanges(changes: SimpleChanges): void {

    this.networkForm = this.fb.group({
      name: [this.networkToEdit?.getName(), [Validators.required, Validators.maxLength(50)]],
      icon: [this.networkToEdit?.getIcon(), [Validators.required, Validators.maxLength(100)]],
      url: [this.networkToEdit?.getUrl(), [Validators.required,  Validators.maxLength(255)]]});

  }

  public touchedAndValid(formControlName: string): boolean {
    return this.networkForm!.get(formControlName)!.valid && this.networkForm!.get(formControlName)!.touched;
  }

  public touchedAndInvalid(formControlName: string): boolean {
    return this.networkForm!.get(formControlName)!.invalid && this.networkForm!.get(formControlName)!.touched;
  }

  onSubmit(): void {
    if (this.networkForm?.valid) {

      console.log(this.networkForm?.value);

      const formValues = this.networkForm.value;

      console.log(formValues);

      const userId = parseInt(sessionStorage.getItem('userId')!);

      const startDateValue: string = formValues.startDate;
      const startDate: Date = new Date(startDateValue);
      
      let network: Network = new Network(
        this.networkToEdit!.getId(),
        formValues.name,
        formValues.icon,
        formValues.url,
        userId
      );

      this.dataService.editNetwork(network).subscribe(r => {
        console.log("Network successfully edited", r);
        this.networkForm?.reset;
      }, error => {
        console.log("The network couldn't been edited", error);
      });

    } else {
      console.log(this.networkForm?.value)
      console.log("The form is invalid, check it out");
    }
  }


}
