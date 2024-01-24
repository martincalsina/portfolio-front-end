import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-front-end';

  isLoading: boolean = false;
  private loadingSubscription: Subscription = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {

    this.loadingSubscription = this.dataService.getLoadingSubject().subscribe((b:boolean) => {
      this.isLoading = b;
    });

  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }
}
