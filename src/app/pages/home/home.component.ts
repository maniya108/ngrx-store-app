import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFeatureCount } from '../../store/home/home.selector';
import { AsyncPipe } from '@angular/common';
import { aDecrement, aIncrement, aReset } from '../../store/home/home.action';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
  readonly #counterStore = inject(Store);

  counter$ = this.#counterStore.select(selectFeatureCount);

  increment() {
    this.#counterStore.dispatch(aIncrement());
  }

  decrement() {
    this.#counterStore.dispatch(aDecrement());
  }

  reset() {
    this.#counterStore.dispatch(aReset());
  }
}
