import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserSidebarComponent } from './user/user-sidebar/user-sidebar.component';
import { UserNavbarComponent } from './user/user-navbar/user-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    UserSidebarComponent,
    UserNavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
