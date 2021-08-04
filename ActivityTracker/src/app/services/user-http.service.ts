import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  private postHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:7000/users');
  }

  addUser(User: User): Observable<User> {
    return this.http.post<User>('http://localhost:7000/users', User, { headers: this.postHeaders });
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>('http://localhost:7000/users/' + id);
  }

  updateUser(User: User): Observable<User> {
    return this.http.put<User>('http://localhost:7000/users/' + User.id, User, { headers: this.postHeaders });
  }

}