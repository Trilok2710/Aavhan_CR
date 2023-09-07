import { Component ,OnInit} from '@angular/core';
import { UserDataService } from '../../services/user-data.service'; // Adjust the path
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Your auth service

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  registrationData: any;
  userDetails :any;

   constructor(private userDataService: UserDataService,private route :ActivatedRoute, private authService: AuthService) {}

//   ngOnInit(): void {
    
//     this.registrationData = this.userDataService.registrationData;
//     this.userDetails = this.authService.getUserDetails();

//   }


// }
ngOnInit(): void {
  // Access the stored registration data from the service
  this.registrationData = this.userDataService.registrationData;
  this.route.queryParams.subscribe(params => {
    this.userDetails = params['userDetails'];
  });

  this.authService.getUserDetails().subscribe(
    (response: any) => {
      if (response && response.userDetails) {
        //this.userDetails = response.userDetails;
        this.registrationData = response.userDetails;
      } else {
        // Handle case when userDetails are not available
      }
    },
    (error:any) => {
      console.error(error);
      // Handle error
    }
  );
}
}