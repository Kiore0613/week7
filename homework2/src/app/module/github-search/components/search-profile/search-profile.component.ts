import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-profile',
  templateUrl: './search-profile.component.html',
  styleUrls: ['./search-profile.component.scss']
})
export class SearchProfileComponent implements OnInit {

  constructor() { }

  @Output() onSearch = new EventEmitter();

  search(searchInput: string){
    this.onSearch.emit(searchInput);
  }

  ngOnInit() {
  }

}
