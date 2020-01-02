import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { SearchProfileComponent } from './components/search-profile/search-profile.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { FollowingsComponent } from './components/followings/followings.component';



@NgModule({
  declarations: [LayoutComponent, SearchProfileComponent, GithubProfileComponent, RepositoriesComponent, FollowingsComponent],
  imports: [
    CommonModule
  ],
  exports: [LayoutComponent, SearchProfileComponent, GithubProfileComponent, RepositoriesComponent, FollowingsComponent]
})
export class GithubSearchModule { }
