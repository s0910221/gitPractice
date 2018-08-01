import { Component, OnInit } from '@angular/core';
import { of, from, fromEvent, empty, never, throwError, interval, timer, } from 'rxjs';

@Component({
  selector: 'app-day6',
  templateUrl: './day6.component.html',
  styleUrls: ['./day6.component.css']
})
export class Day6Component implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.p1();
    // this.p2();
    // this.p3();
    this.p4();
  }

  p1() {
    console.log('p1');
    const source = of('Jerry', 'Anna');
    const arr = ['Jerry', 'Anna', 2016, 2017, '30 days'];
    const source2 = from(arr);

    source.subscribe({
      next: (value) => { console.log(value); },
      complete: () => { console.log('complete!'); },
      error: (error) => { console.log(error); }
    });

    source2.subscribe(
      next => { console.log(next); },
      error => { console.log(error); },
      () => { console.log('complete!'); }
    );
  }

  p2() {
    console.log('p2');
    const source = from(new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello RxJS!');
      }, 3000);
    }));

    source.subscribe(
      next => { console.log(next); },
      error => { console.log(error); },
      () => { console.log('complete!'); }
    );
  }

  p3() {
    console.log('p3');
    const source = fromEvent(document.body, 'click');
    // const source = empty();
    // const source = never();
    // const source = throwError('error');
    source.subscribe(
      next => { console.log(next); },
      error => { console.log(error); },
      () => { console.log('complete!'); }
    );
  }

  p4() {
    console.log('p4');
    // const source = interval(1000);
    // 過1秒後發送並每隔2秒發送
    const source = timer(1000, 2000);
    // 1秒後送出並結束
    // const source = timer(1000);
    const subscription = source.subscribe(
      next => { console.log(next); },
      error => { console.log(error); },
      () => { console.log('complete!'); }
    );
    timer(6000).subscribe(
      value => { subscription.unsubscribe(); }
    );
  }


}
