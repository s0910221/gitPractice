import { Component, OnInit } from '@angular/core';
import { interval, } from 'rxjs';
import { map, mapTo, filter } from 'rxjs/operators';

@Component({
  selector: 'app-day7',
  templateUrl: './day7.component.html',
  styleUrls: ['./day7.component.css']
})
export class Day7Component implements OnInit {
  constructor() { }

  ngOnInit() {
    // this.p1();
    this.p2();
  }

  p1() {
    console.log('p1');
    const source = interval(1000);
    // const newest = source.pipe(map(x => x + 2));
    const newest = source.pipe(mapTo(5));
    newest.subscribe(console.log);
  }

  p2() {
    console.log('p2');
    const source = interval(1000);
    const newest = source.pipe(filter(x => x % 2 === 0));
    newest.subscribe(console.log);
  }

}
