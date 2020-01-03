import { Component, OnInit } from "@angular/core";
import { GithubApiService } from "../../services/github-api.service";
import { GithubProfile } from "../../models/githubProfile";
import { Profile } from "../../models/profile";
import { GithubRepositories } from "../../models/githubRepositories";
import { concatMap } from 'rxjs/operators';

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  profile: GithubProfile;
  error: string;
  constructor(private githubApiService: GithubApiService) {}

  
  ngOnInit() {}

  searchProfile(user: Profile) {
    this.githubApiService
      .getProfile(user)
      .pipe(
        concatMap( (response: GithubRepositories) => {
          console.table(response.repos_url);
          console.table(response);
          this.profile = response;
          return this.githubApiService.getReposAndFollowers(response.repos_url, response.followers_url);
        } )
      )
      .subscribe((searchResult) => {
        if(searchResult.length == 0){
          this.error = "Not found";
          console.log(this.error);
        }
        console.log(searchResult);
      });
  }
}
