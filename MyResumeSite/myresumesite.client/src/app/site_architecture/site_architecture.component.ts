import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './site_architecture.html',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  //styleUrl: './app.css'
})
export class SiteArchitectureComponent {
  constructor(private http: HttpClient) { }
  protected readonly title = signal('myresumesite.client');
}
