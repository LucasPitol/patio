import { Component, HostListener } from '@angular/core';
import { Utils } from '../../utils/utils';
import { Router } from '@angular/router';
import { utils } from 'protractor';
import { FilterService } from 'src/app/services/filter-service';

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
		local: '',
		dataInicio: Date,
		dataFim: Date,
		categoria: ''
	}

	goToListagemCards()
	{
		this.filterService.storeFilter(this.filterForm);

		Utils.goToListagemCards(this.router);
	}
}