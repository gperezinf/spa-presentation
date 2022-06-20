import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide5',
  templateUrl: './slide5.component.html',
  styleUrls: ['./slide5.component.css']
})
export class Slide5Component implements OnInit {
  fading:boolean = false;
  currentClass: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.timeFade();
    setInterval(() => {
      this.fading = false;
      this.currentClass++;
      this.timeFade()
      if (this.currentClass > 3) this.currentClass = 1;
    }, 2000);
  }

  timeFade() {
    setTimeout(() => {
      this.fading = true;
    }, 1800);
  }
}