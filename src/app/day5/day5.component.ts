import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-day5',
  templateUrl: './day5.component.html',
  styleUrls: ['./day5.component.css']
})
export class Day5Component implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.pra1();
    this.pra2();
  }

  pra1() {
    console.log('pra1');
    const observable = Observable.create((observer) => {
      observer.next('Jerry'); // RxJS 4.x 以前的版本用 onNext
      observer.next('Anna');

      // let it be async
      setTimeout(() => {
        observer.next('RxJS 30 days!');
      }, 30);
    });

    // observable may be sync or async
    console.log('start');
    observable.subscribe((value) => {
      console.log(value);
    });
    console.log('end');
  }

  pra2() {
    console.log('pra2');
    const observable = Observable.create((observer) => {
      try {
        observer.next('Jerry');
        observer.next('Anna');
        observer.complete();
        observer.next('not work');
        throw new Error('error');
      } catch (e) {
        observer.error(e);
      }
    });

    // 用我們定義好的觀察者，來訂閱這個 observable
    observable.subscribe(
      value => { console.log(value); },
      error => { console.log('Error: ', error); },
      () => { console.log('complete'); }
    );
  }
}
