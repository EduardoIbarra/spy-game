import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable()

export class LocationsService {
  MAIN_NODE = 'locations';
  constructor(private db: AngularFirestore) {
  }
  getLocations() {
    return this.db.collection(this.MAIN_NODE).valueChanges();
  }
}
