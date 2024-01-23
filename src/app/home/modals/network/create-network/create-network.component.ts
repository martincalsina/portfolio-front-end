import { Component } from '@angular/core';
import { Network } from '../../../../model/Network';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-create-network',
  templateUrl: './create-network.component.html',
  styleUrl: './create-network.component.css'
})
export class CreateNetworkComponent {

  public networkForm?: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit(): void {

    this.networkForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      icon: ['', [Validators.required, Validators.maxLength(100)]],
      url: ['', [Validators.required,  Validators.maxLength(255)]]});

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
        0,
        formValues.name,
        formValues.icon,
        formValues.url,
        userId
      );

      this.dataService.createNetwork(network).subscribe(r => {
        console.log("Network successfully created", r);
        this.dataService.getNetworkSubject().next();
        this.networkForm?.reset;
      }, error => {
        console.log("The network couldn't been created", error);
      });

    } else {
      console.log(this.networkForm?.value)
      console.log("The form is invalid, check it out");
    }
  }

}
