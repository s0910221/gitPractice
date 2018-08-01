import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Day1Component } from './day1/day1.component';
import { HttpService } from './public_services/http.service';
import { HttpClientModule } from '@angular/common/http';
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
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    Day1Component,
    Day3Component,
    Day5Component,
    Day6Component,
    Day7Component,
    Day8Component,
    Day9Component,
    Day10Component,
    Day11Component,
    RouteTestComponent,
    RoutePageComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
