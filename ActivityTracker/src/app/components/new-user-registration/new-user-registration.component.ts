import { Component, OnInit } from '@angular/core';
import { ToggleDisplayService } from 'src/app/services/toggle-display.service';

@Component({
  selector: 'app-new-user-registration',
  templateUrl: './new-user-registration.component.html',
  styleUrls: ['./new-user-registration.component.css']
})
export class NewUserRegistrationComponent implements OnInit {

  constructor(private displayService: ToggleDisplayService) { }

  ngOnInit(): void {
    this.displayService.isDisplayed = false;
  }

}
