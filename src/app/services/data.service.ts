import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Notification } from '../models/Notification';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  notificationCollection: AngularFirestoreCollection<Notification>;
  notificationDoc: AngularFirestoreDocument<Notification>;
  notifications: Observable<Notification[]>;
  Notification: Observable<Notification>;

  constructor(
    private afs: AngularFirestore,
  ) { }

  getNotifications() {
  this.notificationCollection = this.afs.collection<Notification>(`offer_list`, ref => ref.where('status', '==', 1));
  this.notifications = this.notificationCollection.snapshotChanges().pipe(
    map(actions => actions.map(a => {
      if (a.payload.doc.exists == false) {
        return null;
      } else {
        const data = a.payload.doc.data() as Notification;
        const id = a.payload.doc.id;
        return { id, ...data };
      }

    }))
  );
  //this.getNotifs();
  return this.notifications;
}
}
