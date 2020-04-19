import { AuthGuard } from './../auth/guard/auth.guard';
import { AdminGuard } from './../auth/guard/adminguard.guard';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const articleRoutes : Routes = [
    { path: 'edit/:id', component: EditComponent, canActivate: [AdminGuard]},
    { path: 'view/:id', component: ViewComponent, canActivate: [AuthGuard]},
    { path: 'create', component: CreateComponent, canActivate: [AdminGuard]}
]

@NgModule({
imports: [
RouterModule.forChild(articleRoutes)
],
exports: [
    RouterModule
]
})

export class ArticleRoutingModule {

}



