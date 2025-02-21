import { Component, inject } from '@angular/core';
import { UserService } from './user.service';
import { CardComponent } from './card.component';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { catchError, map, of, tap } from 'rxjs';

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
  users$ = this.userService.list();
}
