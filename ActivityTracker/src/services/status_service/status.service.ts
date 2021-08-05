import { Injectable } from '@angular/core';
import { Status } from '../../models/Status';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor() { }

  status: Status = new Status(0, '');
}
