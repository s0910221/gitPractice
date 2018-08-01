import { Component, OnInit } from '@angular/core';
import { interval, fromEvent, of } from 'rxjs';
import { take, first, takeUntil, map, concatAll } from 'rxjs/operators';

@Component({
  selector: 'app-day8',
  templateUrl: './day8.component.html',
  styleUrls: ['./day8.component.css']
})
export class Day8Component implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.p1();
    // this.p2();
    // this.p3();
    // this.p4();
    this.p5();
  }

  p1() {
    console.log('p1');
    const source = interval(1000);
    // const example = source.pipe(take(3));
    const example = source.pipe(first());
    example.subscribe(
      result => { console.log(result); },
      error => { console.log(error); },
      () => { console.log('complete'); }
    );
  }

  p2() {
    console.log('p2');
    const source = interval(1000);
    const click = fromEvent(document.body, 'click');
    const example = source.pipe(takeUntil(click));
    example.subscribe(
      result => { console.log(result); },
      error => { console.log(error); },
      () => { console.log('complete'); }
    );
  }

  p3() {
    console.log('p3');
    const click = fromEvent(document.body, 'click');
    const source = click.pipe(map(e => of(1, 2, 3)));
    const example = source.pipe(concatAll());
    example.subscribe(
      result => { console.log(result); },
      error => { console.log(error); },
      () => { console.log('complete'); }
    );
  }

  p4() {
    console.log('p4');
    const obs1 = interval(1000).pipe(take(5));
    const obs2 = interval(500).pipe(take(2));
    const obs3 = interval(2000).pipe(take(1));

    const source = of(obs1, obs2, obs3);

    const example = source.pipe(concatAll());

    example.subscribe({
      next: (value) => { console.log(value); },
      error: (err) => { console.log('Error: ' + err); },
      complete: () => { console.log('complete'); }
    });
  }

  p5() {
    console.log('p5');
    const dragDOM = document.getElementById('drag');

    const mouseDown = fromEvent(dragDOM, 'mousedown');
    const mouseUp = fromEvent(document, 'mouseup');
    const mouseMove = fromEvent(document, 'mousemove');

    const source = mouseDown.pipe(
      map(event => mouseMove.pipe(takeUntil(mouseUp))),
      concatAll(),
      map(event => ({ x: (<MouseEvent>event).x, y: (<MouseEvent>event).y }))).subscribe(
        pos => {
          dragDOM.style.left = pos.x + 'px';
          dragDOM.style.top = pos.y + 'px';
        }
      );

  }

}
