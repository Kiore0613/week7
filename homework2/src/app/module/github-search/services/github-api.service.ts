import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {of, forkJoin, Observable} from "rxjs";
import { Follower } from '../models/followers';
import { Repository } from '../models/repository';
import { Profile } from '../models/profile';
import { GithubProfile } from '../models/githubProfile';

@Injectable({
  providedIn: "root"
})
export class GithubApiService {
  private clientId: string;
  private clientSecret: string;
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.clientId = "ffe47a1a2ef0e5b8244f";
    this.clientSecret = "837ed397a90e89557a71a9c0bbbef7c1be26456b";
    this.baseUrl = "https://api.github.com/users";
  }

  getProfile(githubUser: string) {
    return this.http.get<GithubProfile>(`${this.baseUrl}/${githubUser}?/${this.clientSecret}?/${this.clientId}`)
    .pipe(
        catchError((error: HttpErrorResponse) => of(null) as Observable<GithubProfile>)
    );
  }

  getReposAndFollowers(githubRepositories: string, githubFollowers: string) {
    const followers = this.http.get<Follower>(githubFollowers);
    const repositories = this.http.get<Repository>(githubRepositories);

    return forkJoin([followers, repositories]).pipe(
      catchError((error: HttpErrorResponse)=> of([]))
    );
  }
}
