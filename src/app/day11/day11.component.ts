import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, takeUntil, concatAll, filter, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-day11',
  templateUrl: './day11.component.html',
  styleUrls: ['./day11.component.css']
})
export class Day11Component implements OnInit {

  constructor() { }

  ngOnInit() {
    const video = document.getElementById('video');
    const anchor = document.getElementById('anchor');

    const scroll = fromEvent(document, 'scroll');
    scroll.pipe(map(e => anchor.getBoundingClientRect().bottom < 0)).subscribe(
      bool => {
        if (bool) {
          video.classList.add('video-fixed');
        } else {
          video.classList.remove('video-fixed');
        }
      }
    );

    const mouseDown = fromEvent(video, 'mousedown');
    const mouseUp = fromEvent(document, 'mouseup');
    const mouseMove = fromEvent(document, 'mousemove');

    mouseDown.pipe(
      filter(e => video.classList.contains('video-fixed')),
      map(event => mouseMove.pipe(takeUntil(mouseUp))),
      concatAll(),
      // withLatestFrom(mouseDown, (moveEvent, downEvent) => {
      //   const move = (<MouseEvent>moveEvent);
      //   const down = (<MouseEvent>downEvent);
      //   return {
      //     x: move.clientX - down.offsetX,
      //     y: move.clientY - down.offsetY
      //   };
      // }),
      map(event => ({ x: (<MouseEvent>event).clientX, y: (<MouseEvent>event).clientY }))).subscribe(
        pos => {
          video.style.left = pos.x + 'px';
          video.style.top = pos.y + 'px';
        }
      );
  }

}
