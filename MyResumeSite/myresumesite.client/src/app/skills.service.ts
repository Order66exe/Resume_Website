import { inject, Injectable } from '@angular/core';
import { Skill } from './skill';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  url = 'https://jsonplaceholder.typicode.com/posts/1';
  skillSet = [{
    "name": "hello",
    "myProficiency": "adawdawd",
    "yearsOfExperience": 1
  }];
  constructor(private http: HttpClient) { }

  // async getSkills(): Promise<any> {
  //   return fetch(this.url);
  //   const data = await fetch(this.url);
  //   return await data.json() ?? [];
  // }
  // Standard variation
  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>('https://localhost:7094/api/skills');
  }
}
