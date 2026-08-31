import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HobbiesService } from '../hobbies.service';
import { Hobby } from '../hobby';
import { HobbyComponent } from '../hobby/hobby.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HobbyComponent],
  templateUrl: "./hobbies.html",
  //styleUrl: './app.css'
})
export class HobbiesComponent {
  hobbiesList: Hobby[] = [];
  filteredHobbiesList: Hobby[] = [];
  hobbiesService: HobbiesService = inject(HobbiesService);
  constructor() { }
  ngOnInit() {
    this.hobbiesService.getHobbies().subscribe({
      next: (data) => {
        this.hobbiesList = [...data];
        this.filteredHobbiesList = this.hobbiesList;
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log('complete')
      }
    })
  }
  filterResults() {
    this.filteredHobbiesList = this.hobbiesList.filter((hobby) => hobby.name.length > 0);
  }
}
