import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Skill } from '../skill';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SkillComponent],
  template: `
  <p>{{skill.name}}, {{skill.myProficiency}}, {{skill.yearsOfExperience}}</p>
  `,
  //styleUrl: './app.css'
})
export class SkillComponent {
  @Input() skill!: Skill;
}
