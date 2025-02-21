import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User, UserArraySchema } from './user';
import { validateApiResponse } from './validateApiResponse';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  list() {
    return this.http
      .get<User[]>('/assets/user-list.json')
      .pipe(validateApiResponse(UserArraySchema));
  }
}
