import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, takeWhile } from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  standalone: true,
  imports: [NgIf],
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.css'
})
export class CountdownTimerComponent {
  countDownStart = 10;
  countDownCompleted = false
  private numbers = interval(1000);
  private countDownObservable = this.numbers.pipe(
    map(secondsElapsed => secondsElapsed + 1),
    takeWhile(timeLeft => timeLeft <= 10)
  );

  launchCountDown() {
    this.countDownObservable.subscribe({
      next: (time) => {
        console.log(time);
        this.countDownStart = 10 - time;
      },
      complete: () => this.countDownCompleted = true
    })
  }
}
