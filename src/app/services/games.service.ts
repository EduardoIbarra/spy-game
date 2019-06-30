import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable()

export class GamesService {
  MAIN_NODE = 'games';
  constructor(private db: AngularFirestore) {
  }
  getGames() {
    return this.db.collection(this.MAIN_NODE).valueChanges();
  }
  createGame(game) {
    return this.db.doc(`${this.MAIN_NODE}/${game.id}`).set(game);
  }
  joinPlayer(player) {
    return this.db.collection(`${this.MAIN_NODE}/${player.gameId}/players`).add(player);
  }
  getGame(gameId) {
    return this.db.doc(`${this.MAIN_NODE}/${gameId}`);
  }
}
