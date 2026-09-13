import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [HomeComponent, RouterOutlet, RouterModule, CommonModule]
  //styleUrl: './app.css'
})
export class AppComponent {
}
