// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { App } from './app';
// import { Hobbies } from './hobbies_page/hobbies';

// export const routes: Routes = [
//   {
//     path: '',
//     component: App,
//   },
//   {
//     path: '/hobbies',
//     component: Hobbies,
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { AboutMeComponent } from './about_me/about_me.component';
import { SkillsComponent } from './skills/skills.component';
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
    path: 'about_me',
    component: AboutMeComponent,
    title: 'About Me'
  },
  {
    path: 'skills',
    component: SkillsComponent,
    title: 'Skills'
  }
];

export default routeConfig;
