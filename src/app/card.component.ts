import { Component, input } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html'
})
export class CardComponent {
  user = input.required<User>();
}
