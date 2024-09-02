import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { loadAllTodo } from '../../store/todo/todo.action';
import { isLoading, todoList } from '../../store/todo/todo.selector';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TodoComponent implements OnInit {
  readonly #todoStore = inject(Store);

  isLoading$ = this.#todoStore.select(isLoading);
  todoList$ = this.#todoStore.select(todoList);

  todoList = signal<{ id: number; name: string }[]>([]);

  ngOnInit(): void {
    this.#todoStore.dispatch(loadAllTodo());

    setTimeout(() => {
      this.todoList.set([{ id: 1, name: 'a' }]);
    }, 3000);
  }
}
