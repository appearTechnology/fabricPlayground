import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { StorageService, Item } from '../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { DataService } from '../services/data.service'
@Component({
  selector: 'app-data-filter',
  templateUrl: './data-filter.page.html',
  styleUrls: ['./data-filter.page.scss'],
})
export class DataFilterPage implements OnInit {


  items: Item[] = [];

  newItem: Item = <Item>{};
  news: any

  constructor(
    private storageService: StorageService,
    private plt: Platform,
    private toastController: ToastController,
    private storage: Storage,
    private dataService: DataService) {
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }

  getData(){
    this.dataService.getNotifications().subscribe(i => {
      //console.log(i)
      this.news = i
    })
  }

  // READ
  loadItems() {
    this.getData()
    this.storageService.getItems().then(items => {
      this.items =  this.news;
      console.log(this.items)
    });
  }

  ngOnInit(){
    this.getData()
  }

/*  ngOnInit() {
    var array1 = [
      {
        title: 'title 1',
        uid: 123,
        unlock: 'redeemed'
      },
      {
        title: 'title 2',
        uid: 234,
        unlock: 'redeemed'
      },
      {
        title: 'title 3',
        uid: 345,
        unlock: 'redeemed'
      },
    ]


    var array2 = [
      {
        title: 'title 1',
        id: 123,
        unlock: ''
      },
      {
        title: 'title 2',
        id: 234,
        unlock: ''
      },
      {
        title: 'title 3',
        id: 345,
        unlock: ''
      },
      {
        title: 'title 4',
        id: 456,
        unlock: ''
      },
      {
        title: 'title 5',
        id: 678,
        unlock: ''
      },
    ]

    array1.forEach(function(item, index, array) {
      var ItemIndex = array2.findIndex(b => b.id === item.uid);

      array2[ItemIndex].unlock = array1[ItemIndex].unlock

    })

    console.log(array2)
  }*/
}
