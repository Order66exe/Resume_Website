import { inject, Injectable } from '@angular/core';
import { Film } from '../models/film';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  url = 'https://jsonplaceholder.typicode.com/posts/1';
  constructor(private http: HttpClient) { }
  getAllFilms(): Observable<Film[]> {
    return this.http.get<Film[]>('https://localhost:7094/api/films/all');
  }
}
