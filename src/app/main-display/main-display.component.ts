import { Component } from '@angular/core';
import { CountdownTimerComponent } from "../components/countdown-timer/countdown-timer.component";

@Component({
  selector: 'app-main-display',
  imports: [CountdownTimerComponent],
  templateUrl: './main-display.component.html',
  styleUrl: './main-display.component.css'
})
export class MainDisplayComponent {

}
