import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { IPListComponent } from './iplist/iplist.component';


//Define the routes
const appRoutes: Routes = [
  
    {path: '', component: UserTypeComponent},
    {path: 'list', component: IPListComponent}


  ]
  
@NgModule({
  declarations: [
    AppComponent,
    UserTypeComponent,
    IPListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
