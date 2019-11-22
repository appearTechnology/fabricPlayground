import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { CardIO } from '@ionic-native/card-io/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';

import { IonicStorageModule } from '@ionic/storage';

//Firebase configurations
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    //AngularFireModule.initializeApp(environment.firebase),
    //AngularFirestoreModule,
    //AngularFireStorageModule,
    //AngularFireAuthModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot()],
  providers: [
    SocialSharing,
    StatusBar,
    SplashScreen,
    CardIO,
    Diagnostic,
    CameraPreview,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
