import { Component, OnInit, Input } from "@angular/core";
import { GithubRepositories } from "../../models/githubRepositories";

@Component({
  selector: "app-repositories",
  templateUrl: "./repositories.component.html",
  styleUrls: ["./repositories.component.scss"]
})
export class RepositoriesComponent implements OnInit {
  @Input() repositories: GithubRepositories;
  constructor() {}

  ngOnInit() {}
}
