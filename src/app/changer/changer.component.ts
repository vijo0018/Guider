import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changer',
  templateUrl: './changer.component.html',
  styleUrls: ['./changer.component.css']
})
export class ChangerComponent implements OnInit {
category: any;
categories: any;
active: any;

  constructor() { }

  ngOnInit() {
    this.categories = [{
      'id': 1,
      'link': '#',
      'name' : '/src/app/images/ccSharp.png'
    },
    {
      'id': 2,
      'link': '#',
      'name' : '/src/app/images/csharp.png'
    },
  ];

  }
  Actived() {
    //this.active
  }
}
