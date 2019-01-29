import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() { }

  ngOnInit() {
    // const numbers = Observable.interval(1000);

    // numbers.subscribe((number: number) => {
    //   console.log(number);
    // });


    const observable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);

      setTimeout(() => {
        observer.next('second package');
      }, 4000);

      // setTimeout(() => {
      //   observer.error('error');
      // }, 5000);

      setTimeout(() => {
        observer.complete();
      }, 5000);
    });

    this.subscription = observable.subscribe(
      (data: string) => console.log(data),
      (error: string) => console.log(error),
      () => console.log('Complete'));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
