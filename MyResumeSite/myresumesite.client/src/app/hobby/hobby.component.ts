import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Hobby } from '../models/hobby';

@Component({
  selector: 'app-hobby',
  standalone: true,

  imports: [RouterOutlet, CommonModule, HobbyComponent],
  templateUrl: './hobby.html',
  styleUrl: './hobby.css'
})
export class HobbyComponent {
  @Input() hobby!: Hobby;
}
