import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.css']
})
export class ManagerPageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data: any)
  {
    this.http.post('http://localhost:8080/task', data)
    .subscribe((result) =>{
      console.warn("result", result)
    })
    console.warn(data);
  }

}
