import { Component, OnInit, HostBinding } from '@angular/core';
import { FilterService } from 'src/app/services/filter-service';

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
	constructor(private filterservice: FilterService) { }

	@HostBinding('class.is-open')

	items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

	filterForm: any;

	loading = true;

	cards = [
		{"id": 1, "imageUrl": 'assets/golf.jpg', "marca": "Volkswagen", "modelo": "Golf", "versao": "2.0 GTI 4P", "cambio": "Automático", "valor": 138.41},
		{"id": 2, "imageUrl": 'https://abrilquatrorodas.files.wordpress.com/2018/02/ford-ka_plus-2019-1600-06.jpg?quality=70&strip=info&strip=info', "marca": "Ford", "modelo": "KA +", "versao": "1.5 Sigma 4P", "cambio": "Manual", "valor": 55.67}
	];
	
	ngOnInit() {

		this.filterservice.applyFilter.subscribe(
			filter => {
				this.filterForm = filter;
;
				this.teste(filter);
			});

		this.getCardsForHome();
	}

	teste(filter)
	{
		console.log(filter);
	}

	getCardsForHome()
	{
		this.loading = false;
	}
}