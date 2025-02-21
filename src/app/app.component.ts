import { Component, inject } from '@angular/core';
import { UserService } from './user.service';
import { CardComponent } from './card.component';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { catchError, map, of, tap } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, CardComponent],
  templateUrl: './app.component.html',
  host: {
    class: 'block m-12'
  }
})
export class AppComponent {
  private userService = inject(UserService);

  users = rxResource({
    loader: () => {
      return this.userService.list();
    }
  });

  // users$ = this.userService.list().pipe(
  //   map((data) => {
  //     return {
  //       data,
  //       error: undefined
  //     };
  //   }),
  //   catchError((error: any) => {
  //     console.error(error);
  //     return of({
  //       data: undefined,
  //       error: 'Sorry, could not retrieve the list of community members.'
  //     });
  //   })
  // );
}
