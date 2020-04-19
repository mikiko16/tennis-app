import { ToastrService } from 'ngx-toastr';
import { getarticles } from './../../tennis/models/getarticles.model';
import { TennisService } from './../../tennis/tennis.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateArticle } from '../models/create.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  bindingModel: any;
  constructor(private tennisSevice: TennisService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { 
      this.bindingModel = new CreateArticle('', '', '', new Date())
    }

  ngOnInit() {
    this.tennisSevice.getArticleById(this.route.snapshot.params['id'])
    .subscribe(data => {this.bindingModel = data});
  }

  edit(){
    this.tennisSevice.editArticle
    (this.route.snapshot.params['id'], this.bindingModel)
    .subscribe(data => this.toastr.success("Article edited successful"));
    this.router.navigate(['/home']);
  }
}
