import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SkillsService } from '../skills.service';
import { Skill } from '../skill';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SkillComponent],
  templateUrl: "./skills.html",
  //styleUrl: './app.css'
})
export class SkillsComponent{
  skillsList: Skill[] = [];
  filteredSkillsList: Skill[] = [];
  skillsService: SkillsService = inject(SkillsService);
  constructor() { }
  ngOnInit() {
    this.skillsService.getSkills().subscribe({
      next: (data) => {
        this.skillsList = [...data];
        console.log(this.skillsList[0].name);
        console.log(this.skillsList[0].my_Proficiency);
        console.log(this.skillsList[0].years_Of_Experience);
        this.filteredSkillsList = this.skillsList;
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
    this.filteredSkillsList = this.skillsList.filter((skill) => skill.name.length > 0);
  }
}
