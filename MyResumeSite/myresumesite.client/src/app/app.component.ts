import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [HomeComponent, RouterOutlet, RouterModule, CommonModule]
  //styleUrl: './app.css'
})
export class AppComponent {
  // public forecasts: WeatherForecast[] = [];

  // constructor(private http: HttpClient) {}

  // ngOnInit() {
  //   this.getForecasts();
  // }

  // getForecasts() {
  //   this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
  //     (result) => {
  //       this.forecasts = result;
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

  // protected readonly title = signal('myresumesite.client');
}
