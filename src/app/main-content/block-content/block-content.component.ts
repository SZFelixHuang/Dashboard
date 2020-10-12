import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-block-content',
  templateUrl: './block-content.component.html',
  styleUrls: ['./block-content.component.less']
})
export class BlockContentComponent implements OnInit {
  loop = new Array(100);

  constructor() {}

  ngOnInit() {}

  choose(n) {
    alert(n);
  }
}
