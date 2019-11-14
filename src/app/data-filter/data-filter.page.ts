import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-filter',
  templateUrl: './data-filter.page.html',
  styleUrls: ['./data-filter.page.scss'],
})
export class DataFilterPage implements OnInit {

  constructor() { }

  ngOnInit() {
    var array1 = [
      {
        title: 'title 1',
        id: 123,
        unlock: 'redeemed'
      },
      {
        title: 'title 2',
        id: 234,
        unlock: 'redeemed'
      },
      {
        title: 'title 3',
        id: 345,
        unlock: 'redeemed'
      },
    ]


    var array2 = [
      {
        title: 'title 1',
        id: 123,
      },
      {
        title: 'title 2',
        id: 234,
      },
      {
        title: 'title 3',
        id: 345,
      },
      {
        title: 'title 4',
        id: 456,
      },
      {
        title: 'title 5',
        id: 678,
      },
    ]
  }

}
