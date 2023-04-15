import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-servers",
    templateUrl: "./servers.component.html",
    styleUrls: ["./servers.component.css"],
})
export class ServersComponent implements OnInit {
    allowNewServer: boolean = false;
    serverCreationStatus: string = "No Server was created!";
    serverName: string = "test server";
    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit(): void {}
    onCreatedServer() {
        this.serverCreationStatus = `The "${this.serverName}" was created!`;
    }
    onUpdateServerName(event) {
        this.serverName = event.target.value;
    }
}
