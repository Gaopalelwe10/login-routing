import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  array = [
    {name:"Home",path: "menu/home"},
    {name: "About", path: "menu/about"},
    {name: "Contact", path: "menu/contact"}
  ];

  constructor(private router: Router) { }
   
  onNavigate(item){
    this.router.navigateByUrl(item.path)
  }


  ngOnInit() {
  }

}
