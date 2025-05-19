import { Component } from '@angular/core';
import { CountdownTimerComponent } from "../components/countdown-timer/countdown-timer.component";
import { RocketStatusComponent } from "../components/rocket-status/rocket-status.component";

@Component({
  selector: 'app-main-display',
  imports: [CountdownTimerComponent, RocketStatusComponent],
  templateUrl: './main-display.component.html',
  styleUrl: './main-display.component.css'
})
export class MainDisplayComponent {

}
