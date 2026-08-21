import { bootstrapApplication, platformBrowser, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppModule } from './app/app-module';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';
import { AppComponent } from './app/app.component';
bootstrapApplication(AppComponent,
  {
    providers: [
      provideProtractorTestingSupport(),
      provideRouter(routeConfig)
    ]
  }
).catch(err => console.error(err));
