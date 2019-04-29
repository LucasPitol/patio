import { Component, Input } from '@angular/core';
import { Utils } from '../../utils/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
	@Input("card") card: any;

	constructor(private router: Router) { }
  
	goToAnuncio(id)
	{
		Utils.goToAnuncio(id);
	}
}