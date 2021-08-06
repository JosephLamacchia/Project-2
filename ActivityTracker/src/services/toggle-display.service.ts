import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleDisplayService implements OnInit{

  public isDisplayed: boolean | undefined;

  constructor() {
    this.isDisplayed = true;
   }

  ngOnInit() {

  }
}
