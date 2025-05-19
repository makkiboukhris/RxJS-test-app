import { Injectable } from '@angular/core';
import { AstronautStatus } from '../models/astroStatusModel';

@Injectable({
  providedIn: 'root',
})
export class AstronautStatusService {
  astronauts: AstronautStatus[] = [
    {
      icon: '👨',
      id: 1,
      name: 'Neil Armstrong',
      heartRate: 72,
      oxygenLevel: 98,
      temperature: 36.6,
    },
    {
      icon: '👩',
      id: 2,
      name: 'Sally Ride',
      heartRate: 68,
      oxygenLevel: 99,
      temperature: 36.2,
    },
    {
      icon: '👨',
      id: 3,
      name: 'Buzz Aldrin',
      heartRate: 75,
      oxygenLevel: 97,
      temperature: 36.8,
    },
    {
      icon: '👩',
      id: 4,
      name: 'Christina Koch',
      heartRate: 70,
      oxygenLevel: 98,
      temperature: 36.5,
    },
    {
      icon: '👨',
      id: 5,
      name: 'Yuri Gagarin',
      heartRate: 76,
      oxygenLevel: 96,
      temperature: 37.0,
    },
    {
      icon: '👩',
      id: 6,
      name: 'Valentina Tereshkova',
      heartRate: 65,
      oxygenLevel: 99,
      temperature: 36.3,
    },
    {
      icon: '👨',
      id: 7,
      name: 'Scott Kelly',
      heartRate: 74,
      oxygenLevel: 97,
      temperature: 36.7,
    },
    {
      icon: '👩',
      id: 8,
      name: 'Mae Jemison',
      heartRate: 69,
      oxygenLevel: 98,
      temperature: 36.4,
    },
  ];
  getAstroList(): AstronautStatus[] {
    return this.astronauts;
  }
}
