import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { TeamFactory } from 'src/app/core/factories/teams/team.factory';
import { Team } from 'src/app/core/models/teams/team.model';
import { SchoolsService } from '../../../../../../core/services/api/schools/schools.service';

@Component({
  selector: 'app-team-selection',
  templateUrl: './team-selection.component.html',
  styleUrls: ['./team-selection.component.scss'],
})
export class TeamSelectionComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  @Input() conferenceName: string = '';

  @Output() close = new EventEmitter();

  @ViewChild('leDialog')
  private dialogElement!: ElementRef;

  public teams: Array<Team> = [];
  sub: Subscription | undefined;

  constructor(
    private schoolsService: SchoolsService,
    private teamFactory: TeamFactory
  ) {}

  ngOnInit(): void {
    console.log(this.conferenceName);
    this.fetchTeams();
  }

  ngAfterViewInit(): void {
    this.dialogElement.nativeElement.showModal();
  }

  ngOnDestroy(): void {
    if (this.schoolsService) {
      this.sub?.unsubscribe();
    }
  }

  onClose() {
    this.close.emit();
  }

  fetchTeams() {
    this.sub = this.schoolsService
      .getSchools(this.conferenceName)
      .subscribe((data) => {
        this.teams = this.teamFactory.createTeams(data);
      });
  }
}
