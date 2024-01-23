import { Component, Input } from '@angular/core';
import { Network } from '../../../../model/Network';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-delete-network',
  templateUrl: './delete-network.component.html',
  styleUrl: './delete-network.component.css'
})
export class DeleteNetworkComponent {

  @Input() networkToDelete?: Network;

  constructor(private dataService: DataService) {}

  deleteNetwork() {

    this.dataService.deleteNetwork(this.networkToDelete!.getId()).subscribe(r =>{

      console.log("The network was deleted successfully", r);
      
    }, error => {
      console.log("The network couldn't been deleted", error);
    });

  }

}
