import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presentacion-spa';
  currentSlide: number;
  finalSlide: number = 11;

  constructor(private router: Router) {
    this.currentSlide = 1;
  }

  changeSlide(event:any) {
    console.log(event);
    if (event.key == "ArrowRight" && this.currentSlide < this.finalSlide) {
      this.currentSlide++;
    } else if (event.key == "ArrowLeft" && this.currentSlide > 1) {
      this.currentSlide--;
    }
    this.router.navigateByUrl(`${this.currentSlide}`);
  }
}
