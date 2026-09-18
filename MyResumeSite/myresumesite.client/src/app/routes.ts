import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { SkillsComponent } from './skills/skills.component';
import { SiteArchitectureComponent } from './site_architecture/site_architecture.component';
import { NotFoundComponent } from './not_found/not_found.component';
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'hobbies',
    component: HobbiesComponent,
    title: 'Hobbies'
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
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'ERROR PAGE NOT FOUND'
  }
];

export default routeConfig;
