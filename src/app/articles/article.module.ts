import { ArticleRoutingModule } from './article-routing';
import { EditComponent } from './edit/edit.component';
import { TennisService } from './../tennis/tennis.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { articleComponent } from './index';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    declarations: [
        ...articleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ArticleRoutingModule,
        NgxPaginationModule
    ],
    providers: [
        TennisService
    ],
    exports: [
        CommonModule
    ]
})

export class ArticleModule {}
