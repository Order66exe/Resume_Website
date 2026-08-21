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
  }
];

export default routeConfig;
