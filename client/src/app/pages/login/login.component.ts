import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';//hhh
import { UserDataService } from '../../services/user-data.service'; // Import UserDataService


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  registrationData:any;

  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    const input = document.getElementById('password') as HTMLInputElement;
    if (input) {
      input.type = this.showPassword ? 'text' : 'password';
    }
  }
  


  email:string='';
  password:string='';
  errorMessage:string = "";
  ngOnit(){
    this.registrationData = this.userDataService.registrationData;

  }
  constructor(private router:Router,private http: HttpClient,private authService :AuthService,private userDataService:UserDataService){}
  login(): void {
  
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        if (response.status) {
          this.authService.isLoggedIn = true; //new
          this.router.navigate(['/profile']);
        } else {
          this.errorMessage = 'Incorrect Email or Password';
        }
      },
      (error:any) => {
        console.error(error);
        this.errorMessage = 'An error occurred';
      }
    );
  }
}


































