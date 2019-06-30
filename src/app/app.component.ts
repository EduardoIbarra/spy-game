import { Component } from '@angular/core';
import {LocationsService} from './services/locations.service';
import {GamesService} from './services/games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  locations = [];
  game: any = {};
  playerGame: any = {};
  startedGame: any = {};
  constructor(private locationsService: LocationsService, private gamesService: GamesService) {
    locationsService.getLocations().subscribe((result) => {
      this.locations = result;
    });
  }
  generateNewGame() {
    this.game.id = this.makeId(5);
    this.game.location = this.locations[Math.floor(Math.random() * this.locations.length)];
    this.game.started_at = Date.now();
    this.gamesService.createGame(this.game).then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  }
  makeId(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  joinGame() {
    this.gamesService.joinPlayer(this.playerGame).then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  }
  startGame() {
    this.gamesService.getGame(this.game.id).valueChanges().subscribe((game) => {
      this.startedGame = game;
      console.log(this.startedGame);
    });
  }
}
