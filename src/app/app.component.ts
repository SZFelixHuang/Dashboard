import { Component, OnInit } from '@angular/core';
import { facede } from '../assets/Facade';

@Component({
  selector: 'dashboard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'dashboard-app';

  ngOnInit() {
    facede.theme.loadTheme();
  }
}
