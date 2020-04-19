import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { getChallenges } from './../models/getChallenges.model';
import { AuthService } from './../../auth/auth.service';
import { Router } from '@angular/router';
import { TennisService } from './../tennis.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from 'inspector';
import { CommonModule } from '@angular/common'; 
import { Message } from '../models/message.model';

@Component({
  selector: 'app-allchallenges',
  templateUrl: './allchallenges.component.html',
  styleUrls: ['./allchallenges.component.css']
})
export class AllchallengesComponent implements OnInit {

  challenges: Observable<getChallenges[]>;
  id: string;
  message: Message;

  constructor (private tennisService: TennisService,
  private router: Router,
  public authService: AuthService,
  private toastr: ToastrService) {
    this.message = new Message('');
  }

  ngOnInit() {
    this.challenges = this.tennisService.getAllChallenges();
    this.id = localStorage.getItem('id');
  }

  accept(name, time, id){
    this.message.text = `You will play tennis with ${name} at ${time}`;
    console.log(this.message.text)
    this.tennisService.addChallenge(this.message).subscribe()
    this.tennisService.deleteChallenge(id).subscribe()
    this.router.navigate(['/home']);
    this.toastr.success(`You accepted challenge with ${name}`)
  }

  player(first){
    if(first !== this.id){
      return true;
    }
    else{
      return false;
    }
  }
}
