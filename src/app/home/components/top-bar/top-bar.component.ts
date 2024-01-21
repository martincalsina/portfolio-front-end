import { Component } from '@angular/core';
import { ScrollService } from '../../../services/scroll.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {

  constructor(private scrollService: ScrollService) {

  }

  scrollTo(sectionId: string) {
    this.scrollService.scrollToElement(sectionId);
  }

}
