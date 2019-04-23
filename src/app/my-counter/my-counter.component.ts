import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../counter.store';
import { Increment, Decrement, Reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html'
})
export class MyCounterComponent implements OnInit {
  count$: Observable<number>;
 
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.count$ = this.store.select('counter');
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }

}