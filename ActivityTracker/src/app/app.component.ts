import { Component } from '@angular/core';
import { ToggleDisplayService } from './services/toggle-display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ActivityTracker';
  isDisplayed: boolean |undefined;

  constructor(private displayService: ToggleDisplayService) { }

  ngDoCheck() {
    this.isDisplayed = this.displayService.isDisplayed;
  }
}
