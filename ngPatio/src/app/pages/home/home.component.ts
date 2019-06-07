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


    dreamCarUrl = 'assets/dream-car.png'
	
	categorias: string[] = ['Econômico', 'Esportivo', 'Executivo', 'Taxi', 'SUV'];
	
	filterForm = {
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

	paisControl = new FormControl();
	paisOptions: string[] = ['Brasil', 'Eua', 'Portugal'];
	filteredOptionsPais: Observable<string[]>;
  
	ngOnInit() {
		this.filteredOptionsPais = this.paisControl.valueChanges
			.pipe(
			startWith(''),
			map(value => this._filter(value))
		);
	}

	private _filter(value: string): string[] {
		const filterValue = value.toLowerCase();
		
		let opt = this.paisOptions.filter(option => option.toLowerCase().includes(filterValue));

	  	return opt;
	}

	goToListagemCards()
	{
		//this.filterService.storeFilter(this.filterForm);

		Utils.goToListagemCards(this.router, this.filterForm);
	}
}