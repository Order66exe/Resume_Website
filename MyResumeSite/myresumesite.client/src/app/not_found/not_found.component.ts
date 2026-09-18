import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./not_found.html"
})
export class NotFoundComponent {
  constructor() {
  }
  protected readonly title = signal('myresumesite.client');
}
