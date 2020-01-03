import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { SearchProfileComponent } from './components/search-profile/search-profile.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import {  HttpClientModule } from '@angular/common/http';
import { FollowersComponent } from './components/followers/followers.component';



@NgModule({
  declarations: [LayoutComponent, SearchProfileComponent, GithubProfileComponent, RepositoriesComponent, FollowersComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [LayoutComponent, SearchProfileComponent, GithubProfileComponent, RepositoriesComponent]
})
export class GithubSearchModule { }
