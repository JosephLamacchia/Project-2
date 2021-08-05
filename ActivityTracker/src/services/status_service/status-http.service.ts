import { Injectable } from '@angular/core';
import { Status } from 'src/app/models/Status';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusHttpService {

  private postHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllStatus(): Observable<Status[]> {
    return this.http.get<Status[]>('http://localhost:7000/status');
  }

  addStatus(Status: Status): Observable<Status> {
    return this.http.post<Status>('http://localhost:7000/status', Status, { headers: this.postHeaders });
  }

  getStatus(id_status: number): Observable<Status> {
    return this.http.get<Status>('http://localhost:7000/status/' + id_status);
  }

  updateStatus(Status: Status): Observable<Status> {
    return this.http.put<Status>('http://localhost:7000/status/' + Status.id_status, Status, { headers: this.postHeaders });
  }

}