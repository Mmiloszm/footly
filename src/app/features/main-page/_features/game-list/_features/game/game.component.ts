import { Component, Input, ViewChild, ElementRef} from '@angular/core';
import { GameStatistics } from 'src/app/core/models/games-statistics/game-statistics.model';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent{

  @Input() game!: GameStatistics;

  showModal = false;

}
