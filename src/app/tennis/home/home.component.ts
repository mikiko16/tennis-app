import { getarticles } from './../models/getarticles.model';
import { TennisService } from './../tennis.service';
import { Observable } from 'rxjs';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allarticles: Observable<getarticles[]>;
  username: string;
  pageSize: number = 2;
  currentPage: number = 1;

  constructor(public authService: AuthService,
  private tennisService: TennisService,
  private toastr: ToastrService) {
   }

  ngOnInit() {
    console.log('I am here')
    this.username = localStorage.getItem('username');
    this.allarticles = this.tennisService.getArticles()
  }

  changePage(page) {
    this.currentPage = page;
  }

  delete(id){
    this.tennisService.deletearticle(id).subscribe(
      result => this.allarticles = this.tennisService.getArticles(),
    )
    this.toastr.success("Article deleted successful")
  }

  viewArticle(id){
  }
}
