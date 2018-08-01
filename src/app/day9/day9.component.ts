import { Component, OnInit } from '@angular/core';
import { interval, of, pipe, Observable } from 'rxjs';
import { skip, take, takeLast, last, concat, startWith, merge } from 'rxjs/operators';

@Component({
  selector: 'app-day9',
  templateUrl: './day9.component.html',
  styleUrls: ['./day9.component.css']
})
export class Day9Component implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.p1();
    // this.p2();
    // this.p3();
    this.p4();
  }

  p1() {
    console.log('p1');
    // const source = interval(1000);
    // const example = source.pipe(skip(3));

    const source = interval(1000).pipe(take(6));
    // const example = source.pipe(takeLast(2));
    const example = source.pipe(last());


    example.subscribe({
      next: (value) => { console.log(value); },
      error: (err) => { console.log('Error: ' + err); },
      complete: () => { console.log('complete'); }
    });
  }

  p2() {
    console.log('p2');
    const source = interval(1000).pipe(take(3));
    const source2 = of(0);
    const source3 = of(8, 4, 5, 6);
    const example = source.pipe(concat(source2, source3));

    example.subscribe({
      next: (value) => { console.log(value); },
      error: (err) => { console.log('Error: ' + err); },
      complete: () => { console.log('complete'); }
    });

  }

  p3() {
    console.log('p3');
    const source = interval(1000);
    const example = source.pipe(startWith(55));

    example.subscribe({
      next: (value) => { console.log(value); },
      error: (err) => { console.log('Error: ' + err); },
      complete: () => { console.log('complete'); }
    });
  }

  p4() {
    console.log('p4');
    const source = interval(500).pipe(take(3));
    const source2 = interval(300).pipe(take(6));
    const example = source.pipe(merge(source2));

    example.subscribe({
      next: (value) => { console.log(value); },
      error: (err) => { console.log('Error: ' + err); },
      complete: () => { console.log('complete'); }
    });
  }

}
