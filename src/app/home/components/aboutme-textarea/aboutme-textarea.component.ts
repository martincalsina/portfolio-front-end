import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-aboutme-textarea',
  templateUrl: './aboutme-textarea.component.html',
  styleUrl: './aboutme-textarea.component.css'
})
export class AboutmeTextareaComponent implements OnInit, OnChanges {

  @Output() updateDescription = new EventEmitter<string>();
  @Input() descriptionToEdit = "";
  description: string = "";

  ngOnInit(): void {

    this.description = this.descriptionToEdit;
    
  }

  ngOnChanges() {

    this.description = this.descriptionToEdit;

  }

  ngOnDestroy() {
    this.updateDescription.emit(this.description);
  }


}
