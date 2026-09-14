import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Hobby } from '../models/hobby';

@Component({
  selector: 'app-hobby',
  standalone: true,

  imports: [RouterOutlet, CommonModule, HobbyComponent],
  template: `
  <section style="background-image:url('{{hobby.tileImageLoc}}')" class="hobby_tile">
  <h1 class="hobby_attribute">{{hobby.name}}</h1>
  <h2 class="hobby_attribute">{{hobby.enjoyment}}</h2>
  <h2 class="hobby_attribute">{{hobby.amIGood}}</h2>
  </section>
  `,
  styleUrl: './hobby.css'
})
export class HobbyComponent {
  @Input() hobby!: Hobby;
}
