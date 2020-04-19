import { AuthGuard } from './auth/guard/auth.guard';
import { GeolocationComponent } from './tennis/geolocation/geolocation.component';
import { AllchallengesComponent } from './tennis/allchallenges/allchallenges.component';
import { FindplayerComponent } from './tennis/findplayer/findplayer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './tennis/home/home.component';
import { MyChallengesComponent } from './tennis/my-challenges/my-challenges.component';
import { AdminGuard } from './auth/guard/adminguard.guard';
import { ArticleModule } from './articles/article.module';

const routes: Route[] = [
    {path: 'auth', children: [
        {path: 'register', component: RegisterComponent},
        {path: 'signin', component: LoginComponent},
    ]},
    {path: 'home', component: HomeComponent},
    {path: 'findplayer', component: FindplayerComponent, canActivate: [AuthGuard]},
    {path: 'allchallenges', component: AllchallengesComponent, canActivate: [AuthGuard]},
    {path: 'mychallenges', component: MyChallengesComponent, canActivate: [AuthGuard]},
    {path: 'geolocation', component: GeolocationComponent},
    {path: 'article', loadChildren: () => ArticleModule}
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  
  export class AppRoutingModule { }