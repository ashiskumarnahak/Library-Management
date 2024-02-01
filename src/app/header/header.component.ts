import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private keycloak:KeycloakService) { }
  ngOnInit(): void {
  }

  logout(){
    this.keycloak.logout();
  }

}
