import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { TodoModel } from './todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  readonly #httpClient = inject(HttpClient);

  getAllTodo() {
    return this.#httpClient
      .get<TodoModel[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(shareReplay(1));
  }
}
