import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SkillComponent],
  templateUrl: "./skill.html",
  styleUrl: './skill.css'
})
export class SkillComponent {
  @Input() skill!: Skill;
}
