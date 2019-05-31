import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"",component: LoginComponent},
  {path: "menu", component: MenuComponent, children:[{path: "home", component: HomeComponent},
                                          {path: "about", component: AboutComponent},  
                                          {path: "contact", component: ContactComponent}
                                        ]},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
