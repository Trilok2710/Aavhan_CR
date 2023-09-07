import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ImgslideComponent } from './imgslide/imgslide.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { SliderComponent } from './pages/slider/slider.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SignupComponent,
    DashboardComponent,
    ImgslideComponent,
    SliderComponent,
    ForgotpasswordComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token'); // Get token from local storage
        },
        allowedDomains: ['your-backend-domain.com'], // Replace with your backend domain
        disallowedRoutes: ['your-backend-domain.com/auth'], // Replace with your backend auth routes
      }
    })
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
