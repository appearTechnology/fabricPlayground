import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(

  ) { }

  ngOnInit(){
    
  }





  /*ngOnInit() {
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
        title: 'test3',
        id: '3',
        user: '123',
        store: '456'
      },
      {
        title: 'test4',
        id: '8',
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
        title: 'test1',
        id: '2',
        user: '123',
        store: '456',
        points_to_unlock: 6
      },
      {
        title: 'test2',
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
        title: 'test4',
        id: '5',
        user: '123',
        store: '456',
        points_to_unlock: 15
      },
      {
        title: 'test5',
        id: '6',
        user: '123',
        store: '456',
        points_to_unlock: 15
      },

    ]

    for (let i of store_rewards) {
      if (user_points >= i.points_to_unlock) {
        unlocked_items.push(i)
      }
    }

    //console.log(unlocked_items)

    var result = userUnlocks.filter(function(o1) {
      // filter out (!) items in result2
      return !unlocked_items.some(function(o2) {
        return o1.id === o2.id; // assumes unique id
      });
    });
    console.log(result)
    //console.log(unlocked_items)
  }


}*/
