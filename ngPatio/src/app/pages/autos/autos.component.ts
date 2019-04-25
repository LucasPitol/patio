import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'autos-component',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})

export class AutosComponent implements OnInit {
    // cards: { 
	// 	imageUrl: string,
    //  marca: string, 
    //  modelo: string,
	// 	versao: string,
	// 	cambio: string,
	// }[];
	constructor() { }

	loading = true;

	cards = [
		{"id": 1, "imageUrl": '', "marca": "Volkswagen", "modelo": "Golf", "versao": "2.0 GTI", "cambio": "Automático"}
	];
	
	ngOnInit() {
		this.getCardsForHome();
	}

	getCardsForHome()
	{
		this.loading = false;
	}
}