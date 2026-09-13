import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { SkillsComponent } from './skills/skills.component';
import { SiteArchitectureComponent } from './site_architecture/site_architecture.component';
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: 'hobbies',
    component: HobbiesComponent,
    title: 'Details Page'
  },
  {
    path: 'site_architecture',
    component: SiteArchitectureComponent,
    title: 'Site Architecture'
  },
  {
    path: 'skills',
    component: SkillsComponent,
    title: 'Skills'
  }
];

export default routeConfig;
