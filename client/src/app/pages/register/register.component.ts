import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../services/user-data.service'; // Adjust the path
import { AuthService } from '../../services/auth.service'; // Import the correct path

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // password: string = ''; // Bind to the password input field
  

  firstname: string = "";
  phone: string = "";
  email: string = "";
  college: string = "";
  yos: string = "";
  password: string = "";
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    const input = document.getElementById('password') as HTMLInputElement;
    if (input) {
      input.type = this.showPassword ? 'text' : 'password';
    }
  }
  constructor(private http: HttpClient, private router: Router,private userDataService :UserDataService,private authService :AuthService) {}



 
  //   if (
  //     this.firstname === "" ||
  //     this.phone === "" ||
  //     this.email === "" ||
  //     this.college === "" ||
  //     this.yos === "" ||
  //     this.password === ""
  //   ) {
  //     alert("Please fill in all fields");
  //     return; // Don't proceed with registration if any field is empty
  //   }

  //   let bodyData = {
  //     "firstname": this.firstname,
  //     "phone": this.phone,
  //     "email": this.email,
  //     "college": this.college,
  //     "yos": this.yos,
  //     "password": this.password
  //   };

    
  //     this.http.post("http://localhost:9992/student/create", bodyData, { responseType: 'text' })
  //     .subscribe((resultData: any) => {
  //       console.log(resultData);
  //       alert("Registered Successfully");

      

  //     // this.clearForm();
  //     this.router.navigate(['/profile']); 
  //     this.clearForm();
  //   });

  //   this.userDataService.registrationData = {
  //     firstname: this.firstname,
  //     phone: this.phone,
  //     email: this.email,
  //     college: this.college,
  //     yos: this.yos,
  //     password: this.password
  //   };
    
  // }
  register() {
    
    if (
      this.firstname === "" ||
      this.phone === "" ||
      this.email === "" ||
      this.college === "" ||
      this.yos === "" ||
      this.password === ""
    ) {
      alert("Please fill in all fields");
      return; // Don't proceed with registration if any field is empty
    }
  
    let bodyData = {
      "firstname": this.firstname,
      "phone": this.phone,
      "email": this.email,
      "college": this.college,
      "yos": this.yos,
      "password": this.password
    };
  
    this.http.post("http://localhost:9992/student/create", bodyData, { responseType: 'text' })
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert("Registered Successfully");
        this.clearForm();
       
  
        // Navigate to the profile page only if all fields are filled
        if (
          this.firstname !== "" &&
          this.phone !== "" &&
          this.email !== "" &&
          this.college !== "" &&
          this.yos !== "" &&
          this.password !== ""
        ) {
          this.router.navigate(['/profile']);
        }
      });
  
    this.userDataService.registrationData = {
      firstname: this.firstname,
      phone: this.phone,
      email: this.email,
      college: this.college,
      yos: this.yos,
      password: this.password
    };
  }
  

  clearForm() {
    this.firstname = "";
    this.phone = "";
    this.email = "";
    this.college = "";
    this.yos = "";
    this.password = "";
  }
  
save()
{
 this.register();
 this.userDataService.setUser(this.userDataService.registrationData);
 this.router.navigate(['/profile']);
}
}
