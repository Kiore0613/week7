import { Component, OnInit, Input } from '@angular/core';
import { Profile } from '../../models/profile';
import { GithubProfile } from '../../models/githubProfile';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

  @Input() profile: GithubProfile;
  constructor() { }


  ngOnInit() {
    console.log(this.profile);
  }

}
