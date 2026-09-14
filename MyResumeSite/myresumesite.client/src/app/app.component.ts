import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppFooterComponent } from './footer/app_footer.component';
import { AppHeaderComponent } from './header/app_header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [HomeComponent, RouterOutlet, RouterModule, CommonModule, AppHeaderComponent, AppFooterComponent],
  styleUrl: './app.css'
})
export class AppComponent {
}
