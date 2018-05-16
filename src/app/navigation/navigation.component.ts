import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  title = 'Amit\'s Learning';
  navigation = [
    {
      label: 'Login',
      link: '/login'
    },
    {
      label: 'Posts',
      link: '/posts'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
