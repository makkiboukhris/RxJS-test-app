import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { HeaderComponent } from "./header/header.component";
import { MainDisplayComponent } from "./main-display/main-display.component";
import { SideDisplayComponent } from "./side-display/side-display.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MainDisplayComponent, SideDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


}
