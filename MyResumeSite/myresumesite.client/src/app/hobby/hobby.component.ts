import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Hobby } from '../hobby';

@Component({
  selector: 'app-hobby',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HobbyComponent],
  template: `
  <p>{{hobby.name}}, {{hobby.enjoyment}}, {{hobby.amIGood}}, {{hobby.type}}</p>
  `,
  //styleUrl: './app.css'
})
export class HobbyComponent {
  @Input() hobby!: Hobby;
}
