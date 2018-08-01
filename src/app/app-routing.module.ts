import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Day1Component } from './day1/day1.component';
import { Day3Component } from './day3/day3.component';
import { Day5Component } from './day5/day5.component';
import { Day6Component } from './day6/day6.component';
import { Day7Component } from './day7/day7.component';
import { Day8Component } from './day8/day8.component';
import { Day9Component } from './day9/day9.component';
import { Day10Component } from './day10/day10.component';
import { Day11Component } from './day11/day11.component';
import { RouteTestComponent } from './route-test/route-test.component';
import { RoutePageComponent } from './route-test/route-page/route-page.component';

const routes: Routes = [
  { path: 'day1', component: Day1Component },
  { path: 'day3', component: Day3Component },
  { path: 'day5', component: Day5Component },
  { path: 'day6', component: Day6Component },
  { path: 'day7', component: Day7Component },
  { path: 'day8', component: Day8Component },
  { path: 'day9', component: Day9Component },
  { path: 'day10', component: Day10Component },
  { path: 'day11', component: Day11Component },
  {
    path: 'route', component: RouteTestComponent, children: [
      { path: ':id', component: RoutePageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
