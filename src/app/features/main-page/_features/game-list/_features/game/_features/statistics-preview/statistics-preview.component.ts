import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { GameStatistics } from 'src/app/core/models/games-statistics/game-statistics.model';
import { Statistics } from 'src/app/core/models/games-statistics/_features/_features/statistics.model';

@Component({
  selector: 'app-statistics-preview',
  templateUrl: './statistics-preview.component.html',
  styleUrls: ['./statistics-preview.component.scss'],
})
export class StatisticsPreviewComponent implements AfterViewInit, OnInit {
  @Input() game!: GameStatistics;

  @Output() close = new EventEmitter<boolean>();

  @ViewChild('statsDialog')
  private dialogElement!: ElementRef;

  teamAStats!: Statistics[];
  teamBStats!: Statistics[];

  ngOnInit(): void {
    this.findCommonStats();
  }

  ngAfterViewInit(): void {
    this.dialogElement.nativeElement.showModal();
  }

  onClose() {
    this.close.emit(false);
  }

  findCommonStats() {
    this.teamAStats = this.game?.teams[0].stats;
    this.teamBStats = this.game?.teams[1].stats;
    this.teamAStats = this.teamAStats
      .filter((stat1) => {
        return this.teamBStats.some(
          (stat2) => stat2.category === stat1.category
        );
      })
      .sort((a, b) =>
        a.category > b.category ? 1 : b.category > a.category ? -1 : 0
      );
    this.teamBStats = this.teamBStats
      .filter((stat1) => {
        return this.teamAStats.some(
          (stat2) => stat2.category === stat1.category
        );
      })
      .sort((a, b) =>
        a.category > b.category ? 1 : b.category > a.category ? -1 : 0
      );
  }
}
