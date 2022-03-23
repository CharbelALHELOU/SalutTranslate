import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarOpen: boolean = false;
  scroll : boolean = false ;
  develop: boolean = false;
  open = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
/*
 @HostListener('window:scroll', ['$event'])

  

  onWindowScroll() {
    if (this.router.url == '/') {
      let element = document.querySelector('.toScroll') as HTMLElement;
      let nav = document.querySelector('.navbar') as HTMLElement;
      if (window.pageYOffset > element.clientHeight) {
        this.scroll = true;
        nav.classList.add('scrolled');
      } else {
        this.scroll = false;
        nav.classList.remove('scrolled');
      }
    }
  }*/

}
