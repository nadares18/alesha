import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-auth-navbar",
    templateUrl: "./auth-navbar.component.html",
    standalone: false
})
export class AuthNavbarComponent implements OnInit {
  navbarOpen = false;

  constructor() {}

  ngOnInit(): void {}

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }
}
