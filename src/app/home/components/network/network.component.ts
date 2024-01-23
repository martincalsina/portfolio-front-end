import { Component, Input } from '@angular/core';
import { Network } from '../../../model/Network';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrl: './network.component.css'
})
export class NetworkComponent {

  @Input() isLoggedIn: boolean = false;
  @Input() networks?: Network[];

  selectedNetwork?: Network;

  changeSelectedNetwork(network: Network): void {
    this.selectedNetwork = network;
  }

}
