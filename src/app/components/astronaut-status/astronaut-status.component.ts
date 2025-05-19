import { Component } from '@angular/core';
import { AstronautStatusService } from '../../services/astronaut-status.service';
import { AstronautStatus } from '../../models/astroStatusModel';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-astronaut-status',
  imports: [NgFor, NgClass],
  templateUrl: './astronaut-status.component.html',
  styleUrl: './astronaut-status.component.css',
})
export class AstronautStatusComponent {
  astronauts: AstronautStatus[];
  constructor(private astronautStatusService: AstronautStatusService) {
    this.astronauts = astronautStatusService.getAstroList();
  }
}
