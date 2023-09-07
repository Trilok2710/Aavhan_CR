import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserDataService } from 'src/app/services/user-data.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent {
  registrationData:any;
  UserDataService: any;
  ngOninit(){
    this.registrationData = this.UserDataService.registrationData;
  }
}
