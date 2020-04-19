import { Router } from '@angular/router';
import { TennisService } from './../../tennis/tennis.service';
import { Component, OnInit } from '@angular/core';
import { CreateArticle } from '../models/create.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  model: CreateArticle;
  loginFailed: boolean;
  errMessage: ''

  constructor(private tennisService: TennisService,
  private router: Router,
  private toastr: ToastrService) { 
    this.model = new CreateArticle('', '', '', new Date());
  }

  ngOnInit() {
  }

  create(){
    this.tennisService.createArticle(this.model).subscribe(
    data => this.toastr.success("Article added successful"))
    this.router.navigate(['/home']);
  }

}
