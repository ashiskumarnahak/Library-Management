import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private keycloak:KeycloakService
  ) { }

  ngOnInit(): void {
  }
  public login() {
    this.keycloak.login();
  }

}
