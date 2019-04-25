import { Component } from '@angular/core';
import { Utils } from '../../utils/utils';
import { Router } from '@angular/router';
import { utils } from 'protractor';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

	constructor(private router: Router) { }

    dreamCarUrl = 'assets/dream-car.png'

	selected = '';
	
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
		Utils.goToListagemCards(this.router);
	}
}