import { Component, HostListener, OnInit } from '@angular/core';
import { Utils } from '../../utils/utils';
import { Router } from '@angular/router';
import { utils } from 'protractor';
import { FilterService } from 'src/app/services/filter-service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

	constructor(private router: Router,
				private filterService: FilterService) { }

	// @HostListener('')

    dreamCarUrl = 'assets/dream-car.png'
	
    //tipoVeiculoSelected: string;
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
		categoria: ''
	}

	myControl = new FormControl();
	options: string[] = ['One', 'Two', 'Three'];
	filteredOptions: Observable<string[]>;
  
	ngOnInit() {
		this.filteredOptions = this.myControl.valueChanges
			.pipe(
			startWith(''),
			map(value => this._filter(value))
		);
	}
  
	private _filter(value: string): string[] {
	  	const filterValue = value.toLowerCase();
  
	  	return this.options.filter(option => option.toLowerCase().includes(filterValue));
	}

	goToListagemCards()
	{
		this.filterService.storeFilter(this.filterForm);

		Utils.goToListagemCards(this.router);
	}
}