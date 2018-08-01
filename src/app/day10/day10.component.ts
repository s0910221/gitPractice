import { Component, OnInit } from '@angular/core';
import { interval, from } from 'rxjs';
import { take, combineLatest, zip, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-day10',
  templateUrl: './day10.component.html',
  styleUrls: ['./day10.component.css']
})
export class Day10Component implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.p1();
    // this.p2();
    this.p3();
  }

  p1() {
    // source : ----0----1----2|
    // newest : --0--1--2--3--4--5|
    // combineLatest(newest, (x, y) => x + y);
    // example: ----01--23-4--(56)--7|
    // 只要有發射就做
    console.log('p1');
    const source = interval(500).pipe(take(3));
    const newest = interval(300).pipe(take(6));

    const example = source.pipe(combineLatest(newest, (x, y) => x + y));

    example.subscribe({
      next: (value) => { console.log(value); },
      error: (err) => { console.log('Error: ' + err); },
      complete: () => { console.log('complete'); }
    });
  }

  p2() {
    // source : ----0----1----2|
    // newest : --0--1--2--3--4--5|
    // zip(newest, (x, y) => x + y)
    // example: ----0----2----4|
    // 按照順序做發射的事
    console.log('p2');
    const source = interval(500).pipe(take(3));
    const newest = interval(300).pipe(take(6));

    const example = source.pipe(zip(newest, (x, y) => x + y));

    example.subscribe({
      next: (value) => { console.log(value); },
      error: (err) => { console.log('Error: ' + err); },
      complete: () => { console.log('complete'); }
    });
  }

  p3() {
    // main   : ----h----e----l----l----o|
    // some   : --0--1--0--0--0--1|
    // withLatestFrom(some, (x, y) =>  y === 1 ? x.toUpperCase() : x);
    // example: ----h----e----l----L----O|
    console.log('p3');
    const main = from('hello').pipe(zip(interval(500), (x, y) => x));
    const some = from([0, 1, 0, 0, 0, 1]).pipe(zip(interval(300), (x, y) => x));

    const example = main.pipe(withLatestFrom(some, (x, y) => {
      return y === 1 ? x.toUpperCase() : x;
    }));

    example.subscribe({
      next: (value) => { console.log(value); },
      error: (err) => { console.log('Error: ' + err); },
      complete: () => { console.log('complete'); }
    });
  }

}
