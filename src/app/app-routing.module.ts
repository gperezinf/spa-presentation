import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Slide1Component } from './slides/slide1/slide1.component';
import { Slide2Component } from './slides/slide2/slide2.component';
import { Slide3Component } from './slides/slide3/slide3.component';
import { Slide4Component } from './slides/slide4/slide4.component';
import { Slide5Component } from './slides/slide5/slide5.component';
import { Slide6Component } from './slides/slide6/slide6.component';
import { Slide7Component } from './slides/slide7/slide7.component';
import { Slide8Component } from './slides/slide8/slide8.component';
import { Slide9Component } from './slides/slide9/slide9.component';
import { Slide10Component } from './slides/slide10/slide10.component';
import { Slide11Component } from './slides/slide11/slide11.component';

const routes: Routes = [
  { path: '1', component: Slide1Component },
  { path: '2', component: Slide2Component },
  { path: '3', component: Slide3Component },
  { path: '4', component: Slide4Component },
  { path: '5', component: Slide5Component },
  { path: '6', component: Slide6Component },
  { path: '7', component: Slide7Component },
  { path: '8', component: Slide8Component },
  { path: '9', component: Slide9Component },
  { path: '10', component: Slide10Component },
  { path: '11', component: Slide11Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
