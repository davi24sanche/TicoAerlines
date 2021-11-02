import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  posts = [
    {
      title: 'Vuelo CopaArlines AC-102',
      body: 'Lorem ipsum dolor sit amet, consectetur adip',
      author: {
        name: 'Jamaica',
      },
    },
    {
      title: 'Vuelo AirBus A-500',
      body: 'Lorem ipsum dolor sit amet, consectetur adip',
      author: {
        name: 'Las Vegas',
      },
    },
    {
      title: 'Vuelo CopaArlines AC-102',
      body: 'Lorem ipsum dolor sit amet, consectetur adip',
      author: {
        name: 'Anabelle',
      },
    },
  ];

  constructor() { }

  ngOnInit(): void {}

}
