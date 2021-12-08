import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-basics',
  templateUrl: './the-basics.component.html',
  styleUrls: ['./the-basics.component.scss'],
})
export class TheBasicsComponent implements OnInit {
  userName: string = 'khaled elhenaweey';
  userWorkState: boolean = true;
  searchData: any = 'search';
  constructor() {}

  ngOnInit(): void {}
  creatEventBinding() {
    this.userWorkState = false;
  }
  liveSearch(event: Event) {
    this.searchData = (<HTMLInputElement>event.target).value;
  }
}
