import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  name: string = 'Sebastian';
  welcome: string = 'Witaj w sklepie';
  enter: string = 'Wejdź';
}
