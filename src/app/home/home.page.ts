import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { CardIO } from '@ionic-native/card-io/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { AlertController } from '@ionic/angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  total: any;
  stringnum: any;

  constructor(
    private socialSharing: SocialSharing,
    private cardIO: CardIO,
    private diagnostic: Diagnostic,
    public alertController: AlertController,
    private cameraPreview: CameraPreview
  ) { }


  ngOnInit() {
    this.total = 0.00;
    this.stringnum = 0.00;

  }

  InputNum(Num) {

    var num;
    if (this.total > 0) {
      num = this.stringnum.toString() + Num.toString();
    }
    else {
      num = Num;
    }
    this.stringnum = parseInt(num);
    this.total = Number((parseFloat(this.stringnum) / 100)).toFixed(2);
    console.log("total=" + this.total);
  }


  RemoveNum() {
    if (this.total > 0) {
      var text = this.stringnum.toString();
      if (text.length > 1) {
        this.stringnum = parseInt(text.substring(0, text.length - 1));
      }
      else {
        this.stringnum = 0;
      }

      this.total = Number((parseFloat(this.stringnum) / 100)).toFixed(2);
      console.log("total=" + this.total);
    }
  }
  async presentAlertMultipleButtons(i) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: `${i}`,
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });

    await alert.present();
  }

  scanCard() {


    // start camera
    /*  this.cameraPreview.startCamera(cameraPreviewOpts).then(
        (res) => {
          console.log(res)
        },
        (err) => {
          console.log(err)
        });*/

    /*let successCallback = (isAvailable) => { console.log('Is available? ' + isAvailable); }
    let errorCallback = (e) => console.error(e);

    this.diagnostic.isCameraAvailable().then().catch(errorCallback);

    this.diagnostic.getCameraAuthorizationStatus()
      .then((state) => {
        this.presentAlertMultipleButtons(state)
      }).catch(e => console.error(e));*/

    this.cardIO.canScan()
      .then(
        (res: boolean) => {
          if (res) {
            let options = {
              requireExpiry: true,
              requireCVV: true,
              requirePostalCode: false,
              hideCardIOLogo: true,
              guideColor: "#FF496F"
            };
            this.cardIO.scan(options);
          } else {
            this.presentAlertMultipleButtons('test')
          }
        }
      ).catch((err) => {
        // Error!

      })
  }

  share() {

    var i = 'hey this is a test'
    var x = 'Fabric is here!'
    // Share
    this.socialSharing.share(`${x}`, `${i}`, ['info@fabricrewards.com']).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }

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
