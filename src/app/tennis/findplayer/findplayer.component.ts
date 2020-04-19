import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TennisService } from './../tennis.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { findPlayer } from '../models/findplayer.model';

@Component({
  selector: 'app-findplayer',
  templateUrl: './findplayer.component.html',
  styleUrls: ['./findplayer.component.css']
})
export class FindplayerComponent implements OnInit {

  model: findPlayer; 

  constructor(private tennisService: TennisService,
  private router: Router,
  private toastr: ToastrService) { 
    this.model = new findPlayer('', '', '', false);
  }

  ngOnInit() {
  }

  findplayer(){
    this.tennisService.createEvent(this.model).subscribe();
    this.router.navigate(['/home']);
    this.toastr.success("You create a challenge")
  }

}
