import { viewarticle } from './../models/view.model';
import { Component, OnInit } from '@angular/core';
import { TennisService } from '../../tennis/tennis.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  bindingModel: viewarticle;

  constructor(private tennisSevice: TennisService,
    private route: ActivatedRoute,
    private router: Router) { 
      this.bindingModel = new viewarticle();
    }

  ngOnInit() {
    this.tennisSevice.viewarticle(this.route.snapshot.params['id'])
    .subscribe(data => {this.bindingModel = data});
  }

}
