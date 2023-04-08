import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ForbiddenComponent} from "./forbidden/forbidden.component";
import {LoginComponent} from "./login/login.component";
import {SimpleUserComponent} from "./simple-user/simple-user.component";
import {ArtistComponent} from "./artist/artist.component";
import {AuthGuard} from "./auth/auth.guard";
import {SignupArtistComponent} from "./signup-artist/signup-artist.component";
import {SignupComponent} from "./signup/signup.component";
import {VerifyCodeComponent} from "./verify-code/verify-code.component";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contact/contact.component";
import {MyProfileComponent} from "./my-profile/my-profile.component";
import {AproposComponent} from "./apropos/apropos.component";
import {GallerieComponent} from "./my-profile/gallerie/gallerie.component";
import {BottomProfileComponent} from "./my-profile/bottom-profile/bottom-profile.component";
import { DialogContentExample } from './dialog/dialog-content-example';

const routes: Routes = [
  {path: 'homeuser', component: SimpleUserComponent,canActivate:[AuthGuard],data:{roles:['User']}},
  {path: 'homeartist', component: ArtistComponent,canActivate:[AuthGuard],data:{roles:['Artiste']}},
  {path: 'login', component: LoginComponent},
  {path: 'forbidden', component: ForbiddenComponent},
  //{path: 'signupartist', component: SignupArtistComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signupartist', component: SignupArtistComponent},
  {path: 'verify', component: VerifyCodeComponent/*, canActivate: [AuthGuardVerify], data: { submitted: false }*/},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'apropos', component:AproposComponent},
  {
    path: 'myprofile',
    component: MyProfileComponent,
    children: [
      { path: 'gallery', redirectTo: 'myprofile', pathMatch: 'full' },
      {path: 'posts', component:BottomProfileComponent},
      {path: 'gallery', component:GallerieComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
