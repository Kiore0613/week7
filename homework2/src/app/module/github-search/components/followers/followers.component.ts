import { Component, OnInit, Input } from "@angular/core";
import { GithubFollowers } from "../../models/githubFollowers";

@Component({
  selector: "app-followers",
  templateUrl: "./followers.component.html",
  styleUrls: ["./followers.component.scss"]
})
export class FollowersComponent implements OnInit {
  @Input() followers: GithubFollowers;
  constructor() {}

  ngOnInit() {
    console.log(this.followers);
  }
}
