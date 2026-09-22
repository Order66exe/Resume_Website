import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilmsService } from '../services/films.service';
import { Film } from '../models/film';
import { FilmComponent } from '../film/film.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import{MatLabel, MatFormField} from '@angular/material/form-field';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FilmComponent],
  templateUrl: "./films.html",
  //styleUrl: './app.css'
})

export class FilmsComponent {
  filmsList: Film[] = [];
  filteredFilmsList: Film[] = [];
  filmsService: FilmsService = inject(FilmsService);
  constructor() { }
  ngOnInit() {
    this.filmsService.getAllFilms().subscribe({
      next: (data) => {
        this.filmsList = [...data];
        this.filteredFilmsList = this.filmsList;
      },
      error: (error) => {
        console.log(error)
      },
      complete: () => {
        console.log('complete')
      }
    })
  }
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(FilmDialog);
  }


  filterResults() {
    this.filteredFilmsList = this.filmsList.filter((film) => film.title.length > 0);
  }

}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: './new_film.html',
    imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatLabel, MatFormField, MatInputModule],
})
export class FilmDialog {}
