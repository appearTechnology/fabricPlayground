import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  ngOnInit() {
    var uid = 123
    var store = 456
    var user_points = 10
    var unlocked_items = []

    var userUnlocks = [
      {
        title: 'test',
        id: '1',
        user: '123',
        store: '456',
      },
      {
        title: 'test2',
        id: '2',
        user: '123',
        store: '456'
      },
      {
        title: 'test2',
        id: '3',
        user: '123',
        store: '456'
      },
      {
        title: 'test2',
        id: '4',
        user: '123',
        store: '456'
      },

    ]

    var store_rewards = [
      {
        title: 'test',
        id: '1',
        user: '123',
        store: '456',
        points_to_unlock: 5
      },
      {
        title: 'test2',
        id: '2',
        user: '123',
        store: '456',
        points_to_unlock: 6
      },
      {
        title: 'test3',
        id: '3',
        user: '123',
        store: '456',
        points_to_unlock: 7
      },
      {
        title: 'test3',
        id: '4',
        user: '123',
        store: '456',
        points_to_unlock: 8
      },
      {
        title: 'test3',
        id: '5',
        user: '123',
        store: '456',
        points_to_unlock: 15
      },
      {
        title: 'test3',
        id: '6',
        user: '123',
        store: '456',
        points_to_unlock: 15
      },

    ]

    for (let i of store_rewards) {
      if (user_points >= i.points_to_unlock) {
        //console.log(i.title)
        unlocked_items.push(i)
      }
    }
    console.log(unlocked_items)
  }


}
