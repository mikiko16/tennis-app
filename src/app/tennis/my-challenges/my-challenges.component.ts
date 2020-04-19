import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../auth/auth.service';
import { TennisService } from './../tennis.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { myChallenges } from '../models/mychallenges.model';

@Component({
  selector: 'app-my-challenges',
  templateUrl: './my-challenges.component.html',
  styleUrls: ['./my-challenges.component.css']
})
export class MyChallengesComponent implements OnInit {

  mychallanges: Observable<myChallenges[]>;
  id: string;
  constructor(private tennisService: TennisService,
  public authService: AuthService,
  private toastr: ToastrService) {
  }

  ngOnInit() {
    this.mychallanges = this.tennisService.getmychallenges()
    this.id = localStorage.getItem('id');
  }

  play(id){
    if(this.id === id){
      return true;
    }
  }

  delete(id){
    this.tennisService.retireChallenge(id).subscribe(
      result => this.mychallanges = this.tennisService.getmychallenges())
      this.toastr.success("You retired a challenge")
}
}
