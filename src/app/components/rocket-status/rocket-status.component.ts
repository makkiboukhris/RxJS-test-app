import { Component } from '@angular/core';
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";
import { RocketStatusService } from '../../services/rocket-status.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { StatusData } from '../../models/statusDataModel';


@Component({
  selector: 'app-rocket-status',
  imports: [ProgressBarComponent],
  templateUrl: './rocket-status.component.html',
  styleUrl: './rocket-status.component.css'
})
export class RocketStatusComponent {
  rocketStatus = {
    altitude: 0,
    velocity: 0,
    temperature: 0,
    fuel: 0
  };
  constructor(private rocketStatusService: RocketStatusService) {
    this.rocketStatus = this.rocketStatusService.resetTelemetryData();
    this.rocketStatusService.trigger$.subscribe(() => {
      this.subscribeToStatusUpdate();
    });
  }
  subscribeToStatusUpdate(): void {
    this.rocketStatusService.getTelemetryData().subscribe({
      next: (status) => this.rocketStatus = status,
      complete: () => this.rocketStatus = this.rocketStatusService.resetTelemetryData()
    })
  }
  /* if(this.rocketStatusService.getRocketLaunched()) {
  this.rocketStatus$ = this.rocketStatusService.getTelemetryData()
  } */
}
