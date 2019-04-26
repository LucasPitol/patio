import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
	@Input("card") card: any;
  
	items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
}