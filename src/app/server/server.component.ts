import { Component } from '@angular/core';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = 235;
  serverStatus: string = 'online';
  getServerStatus() {
    return this.serverStatus;
  }
}
