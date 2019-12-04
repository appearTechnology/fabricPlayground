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

}
