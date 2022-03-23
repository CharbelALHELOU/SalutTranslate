import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  partners = ['../../../assets/Partner1.png',/*'../../../assets/Partner2.png'*/'../../../assets/Partner3.png','../../../assets/Partner4.png','../../../assets/Partner5.png','../../../assets/Partner6.png','../../../assets/Partner7.png']
  constructor() { }

  ngOnInit(): void {
  }

  show1 = false;
  show2 = false;
  show3 = false;

}
