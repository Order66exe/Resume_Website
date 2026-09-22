import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Film } from '../models/film';

@Component({
  selector: 'app-film',
  standalone: true,

  imports: [RouterOutlet, CommonModule, FilmComponent],
  templateUrl: './film.html',
  styleUrl: './film.css'
})
export class FilmComponent {
  @Input() film!: Film;
}
