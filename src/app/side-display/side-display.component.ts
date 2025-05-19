import { Component } from '@angular/core';
import { AstronautStatusComponent } from "../components/astronaut-status/astronaut-status.component";

@Component({
  selector: 'app-side-display',
  imports: [AstronautStatusComponent],
  templateUrl: './side-display.component.html',
  styleUrl: './side-display.component.css'
})
export class SideDisplayComponent {

}
