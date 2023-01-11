import { Component } from '@angular/core';
import { TeamSelectionService } from 'src/app/core/services/modals/team-selection.service';

@Component({
  selector: 'app-close-dialog-button',
  templateUrl: './close-dialog-button.component.html',
  styleUrls: ['./close-dialog-button.component.scss']
})
export class CloseDialogButtonComponent {

  constructor(public teamSelectionService: TeamSelectionService) { }

}
