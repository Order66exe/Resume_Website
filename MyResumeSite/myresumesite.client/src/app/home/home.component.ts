import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./home.html",
  styleUrl: "./home.css"
})
export class HomeComponent {
  constructor() {
  }
  protected readonly title = signal('myresumesite.client');
}
