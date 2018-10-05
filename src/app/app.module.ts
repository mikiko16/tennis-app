import { ArticleModule } from './articles/article.module';
import { AllchallengesComponent } from './tennis/allchallenges/allchallenges.component';
import { MyChallengesComponent } from './tennis/my-challenges/my-challenges.component';
import { FindplayerComponent } from './tennis/findplayer/findplayer.component';
import { TennisService } from './tennis/tennis.service';
import { HomeComponent } from '../app/tennis/home/home.component';
import { AuthService } from './auth/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { AuthGuard } from './auth/guard/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { CommonModule } from '@angular/common';
import { GeolocationComponent } from './tennis/geolocation/geolocation.component';
import { TokenInterceptor } from './interceptors/token.interceptor'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    MyChallengesComponent,
    AllchallengesComponent,
    FindplayerComponent,
    GeolocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule,
    ArticleModule
  ],
  providers: [AuthService, TennisService,
    {
      provide: HTTP_INTERCEPTORS,      
      useClass: TokenInterceptor,      
      multi: true
      
      }],
  bootstrap: [AppComponent]
})
export class AppModule { }
