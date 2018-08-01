import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.css']
})
export class Day1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    fromEvent(document.body, 'click') // 註冊監聽
      .pipe(take(1)) // 只取一次
      .subscribe(() => { console.log('abc'); });
  }

}
