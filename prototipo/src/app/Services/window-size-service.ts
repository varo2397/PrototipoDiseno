import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class WindowService {
  width$: Observable<number>;
  //create more Observables as and when needed for various properties
  hello: string = "Hello";
  constructor() {
    let windowSize$ = new BehaviorSubject(getWindowSize());

    this.width$ = (windowSize$.pluck('width') as Observable<number>).distinctUntilChanged();

    Observable.fromEvent(window, 'resize')
      .map(getWindowSize)
      .subscribe(windowSize$);
  }

}

function getWindowSize() {
  return {
    width: window.innerWidth
    //you can sense other parameters here
  };
};
