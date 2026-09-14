import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './app_header.html',
  standalone: true,
  imports: [HomeComponent, RouterOutlet, RouterModule, CommonModule],
  styleUrl: './app_header.css'
})
export class AppHeaderComponent {
}
