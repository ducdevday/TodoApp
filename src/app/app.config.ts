import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { todoReducer } from './store/todos/todo.reducer';
import { provideEffects } from '@ngrx/effects';
import { TodoEffects } from './store/todos/todo.effect';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ todoState: todoReducer }),
    provideEffects([TodoEffects]),
    provideToastr(),
    provideAnimations(),
  ],
};
