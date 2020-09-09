import { Component, OnInit } from '@angular/core';
import { faSearch, faHeadphones } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-posdcasts-list',
  templateUrl: './posdcasts-list.component.html',
  styleUrls: ['./posdcasts-list.component.scss']
})
export class PosdcastsListComponent implements OnInit {

  
  faSearch = faSearch;
  headphones=faHeadphones
  podcasts =[1,2,3,4,5,6,7,8,9]
  constructor() { }

  ngOnInit(): void {
  }

}
