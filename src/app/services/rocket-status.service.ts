import { Injectable } from '@angular/core';
import { Observable, Subject, interval, map, takeLast, takeUntil, takeWhile } from 'rxjs';

interface StatusData {
  altitude: number;
  velocity: number;
  temperature: number;
  fuel: number;
}

@Injectable({
  providedIn: 'root'
})
export class RocketStatusService {
  private previousData: StatusData = {
    altitude: 0,
    velocity: 0,
    temperature: 25,
    fuel: 500000
  };

  private rocketLaunched = false;
  private trigger = new Subject<void>();
  trigger$ = this.trigger.asObservable();

  private readonly maxAltitude = 150000; // in meters
  private readonly maxVelocity = 7800;   // orbital speed
  private readonly minTemperature = -150;
  private readonly maxTemperature = 3000;

  private readonly tickRate = 500;

  private generateTelemetry(): StatusData {
    const dt = this.tickRate / 1000; // delta time in seconds

    // Smooth velocity increase (simulate thrust buildup)
    const velocityIncrement = 5;
    const newVelocity = Math.min(this.maxVelocity, this.previousData.velocity + velocityIncrement * dt);

    // Smooth altitude increase
    const newAltitude = Math.min(this.maxAltitude, this.previousData.altitude + (newVelocity * dt));

    // Smooth fuel burn — proportional to velocity
    const burnRate = 10 + newVelocity * 20;
    const newFuel = Math.max(0, this.previousData.fuel - burnRate * dt);

    // Smooth temperature change based on velocity
    let newTemperature = this.previousData.temperature;

    if (newVelocity > 100) {
      newTemperature += 0.05 * (newVelocity / 100); // heating
    } else if (newAltitude > 80000) {
      newTemperature -= 0.2; // cooling in thin air
    }

    // Clamp temperature
    newTemperature = Math.max(this.minTemperature, Math.min(this.maxTemperature, newTemperature));

    // Save new state
    this.previousData = {
      altitude: newAltitude,
      velocity: newVelocity,
      temperature: newTemperature,
      fuel: newFuel
    };

    return {
      altitude: Math.round(newAltitude),
      velocity: Math.round(newVelocity),
      temperature: parseFloat(newTemperature.toFixed(1)),
      fuel: parseFloat(newFuel.toFixed(2))
    };
  }

  getTelemetryData(): Observable<StatusData> {
    return interval(this.tickRate).pipe(
      map(() => this.generateTelemetry()),
      takeWhile(() => this.rocketLaunched),
      takeWhile(data =>
        data.altitude < 150000 &&
        data.velocity < 7800 &&
        data.fuel > 0 &&
        data.temperature < 3000
      ));
  };
  resetTelemetryData(): StatusData {
    return this.previousData = {
      altitude: 0,
      velocity: 0,
      temperature: 25,
      fuel: 500000
    };
  }
  startLaunch(): void {
    this.rocketLaunched = true;
    this.trigger.next();
  }
  stopRocket(): void {
    this.rocketLaunched = false;
  }
}
