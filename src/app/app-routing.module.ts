import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CrudComponent } from './crud/crud.component';
import { Task14Component } from './task14/task14.component';
import { Task15Component } from './task15/task15.component';
import { Task15ArrayofobjComponent } from './task15-arrayofobj/task15-arrayofobj.component';
import { LocalstorageComponent } from './localstorage/localstorage.component';
import { ReverseCrudComponent } from './reverse-crud/reverse-crud.component';
import { ChaildComponent } from './chaild/chaild.component';
import { ParentsComponent } from './parents/parents.component';
import { DependancyinjectionComponent } from './dependancyinjection/dependancyinjection.component';

const routes: Routes = [
  // {
  //   path: '', component:HomeComponent, pathMatch: 'full',
  // },

  {
    path: 'home', component:HomeComponent, pathMatch: 'full',
  },

  {
    path: 'about-us', component:AboutUsComponent,
  },

  {
    path: 'contact-us', component:ContactUsComponent,
  },

  {
    path: 'services', component:ServicesComponent,
  },

  {
    path: 'blogs', component:BlogsComponent,
  },

  {
    path: 'crud', component:CrudComponent,
  },

  {
    path: 'task14', component:Task14Component,
  },

  {
    path: 'task15', component:Task15Component
  },

  {
    path: 'task15-arrayofobj', component:Task15ArrayofobjComponent
  },

  {
    path: 'localstorage', component:LocalstorageComponent
  },
  
  {
    path: 'reverse-crud', component:ReverseCrudComponent
  },

  {
  path: 'chaild', component:ChaildComponent
  },

  {
    path: 'parents', component:ParentsComponent
  },
  {
    path: 'dependancyinjection', component:DependancyinjectionComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
