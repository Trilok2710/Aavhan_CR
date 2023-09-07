import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './services/auth.guard';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full',
  },
  {
    path:'home',
    component:HomeComponent,
    title:'Home'
  },
  {
    path:'login',
    component:LoginComponent,
    title:'Login'
  },
{
  path:'register',
  component:RegisterComponent,
  title:'Register'
},
{
  
  
  path:'profile',
  title:'Profile',
 
   component: ProfileComponent,
    // canActivate: [AuthGuard] 
},
{
  path:'forgotpassword',
  component:ForgotpasswordComponent,
  title:'Forgot Password'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
