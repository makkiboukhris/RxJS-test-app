import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  @Input() label!: string;
  @Input() currentValue = 0;
  @Input() maxValue = 0;
  @Input() minValue = 0;
  @Input() warningThreshold = 0;
  @Input() dangerThreshold = 0;
  @Input() dangerLowerThreshold = 0;
  @Input() warningLowerThreshold = 0;

  strokeDashoffset = 0;
  progressColor = '#22c55e';
  percentage = 0;

  readonly radius = 48;
  readonly circumference = 2 * Math.PI * this.radius;

  ngOnChanges(): void {
    const range = this.maxValue - this.minValue;
    this.percentage = range > 0
      ? Math.min(Math.max(((this.currentValue - this.minValue) / range) * 100, 0), 100)
      : 0;

    const progress = this.circumference - (this.percentage / 100) * this.circumference;
    this.strokeDashoffset = progress;

    if (this.currentValue >= this.dangerThreshold || this.currentValue <= this.dangerLowerThreshold) {
      this.progressColor = '#ef4444'; // red-500
    } else if (this.currentValue >= this.warningThreshold || this.currentValue <= this.warningLowerThreshold) {
      this.progressColor = '#facc15'; // yellow-400
    } else {
      this.progressColor = '#22c55e'; // green-500
    }
  }
}

