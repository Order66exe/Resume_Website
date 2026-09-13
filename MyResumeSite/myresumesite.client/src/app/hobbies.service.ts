import { inject, Injectable } from '@angular/core';
import { Hobby } from './hobby';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HobbiesService {
  url = 'https://jsonplaceholder.typicode.com/posts/1';
  constructor(private http: HttpClient) { }
  getHobbies(): Observable<Hobby[]> {
    return this.http.get<Hobby[]>('https://localhost:7094/api/hobbies');
  }
}
