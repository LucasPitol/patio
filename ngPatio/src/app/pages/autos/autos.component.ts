import { Component, OnInit, HostBinding } from '@angular/core';
import { FilterService } from 'src/app/services/filter-service';
import { FormControl } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'autos-component',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})

export class AutosComponent implements OnInit {

	constructor(private filterservice: FilterService, private db: AngularFireDatabase) {
		
	}

	@HostBinding('class.is-open')


	filterImageUrl = 'assets/filter.png';

	closeImageUrl = 'assets/close.png';

	filterFormFromHome: any;

	loading = true;

	TiposVeiculo: string[] = ['Passeio', 'Taxi'];

	filterForm = {
		tipoVeiculoSelected: '',
		local: {
			pais: '',
			estado: ''
		},
		periodo: {
			dataInicio: '',
			dataFim: '',
		},
		categoria: '',
		veiculo: {
			marca: '',
			modelo: '',
			versao: ''
		}
	}
	cards: any[];

	public datePickerLabel: string;

	date = new FormControl(new Date());
	serializedDate = new FormControl((new Date()).toISOString());

	ngOnInit() {

		this.filterservice.applyFilter.subscribe(
			filter => {
				this.filterFormFromHome = filter;
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
		this.db.list('/cars').valueChanges().subscribe(
			cars => {
				this.cards = cars;
				this.loading = false;
			},
			error => {
				console.log(error);
			}
		);
	}
}