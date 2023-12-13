import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FormsModule } from '@angular/forms';
import { CrudComponent } from './crud/crud.component';
import { Task14Component } from './task14/task14.component';
import { Task15Component } from './task15/task15.component';
import { Task15ArrayofobjComponent } from './task15-arrayofobj/task15-arrayofobj.component';
import { LocalstorageComponent } from './localstorage/localstorage.component';
import { ReverseCrudComponent } from './reverse-crud/reverse-crud.component';
import { ChaildComponent } from './chaild/chaild.component';
import { ParentsComponent } from './parents/parents.component'
import { AlertService } from './alert.service';
import { DependancyinjectionComponent } from './dependancyinjection/dependancyinjection.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServicesComponent,
    BlogsComponent,
    CrudComponent,
    Task14Component,
    Task15Component,
    Task15ArrayofobjComponent,
    LocalstorageComponent,
    ReverseCrudComponent,
    ChaildComponent,
    ParentsComponent,
    DependancyinjectionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
