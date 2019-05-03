import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	cards = [
		{"id": 1, "imageUrl": 'assets/golf.jpg', "marca": "Volkswagen", "modelo": "Golf", "versao": "2.0 GTI 4P", "cambio": "Automático", "valor": 168.41},
		{"id": 2, "imageUrl": 'https://abrilquatrorodas.files.wordpress.com/2018/02/ford-ka_plus-2019-1600-06.jpg?quality=70&strip=info&strip=info', "marca": "Ford", "modelo": "KA +", "versao": "1.5 Sigma 4P", "cambio": "Manual", "valor": 55.67},
		{"id": 3, "imageUrl": 'https://www.cstatic-images.com/car-pictures/xl/usc70toc041g021001.png', "marca": "Toyota", "modelo": "Corolla", "versao": "2.0 XRS 4P", "cambio": "Automático", "valor": 132.51},
		{"id": 4, "imageUrl": 'https://catalogo.webmotors.com.br/imagens/prod/347912/AUDI_A3_1.4_TFSI_FLEX_SEDAN_PRESTIGE_TIPTRONIC_34791212005833228.png?s=fill&w=440&h=330&q=80&t=true', "marca": "Audi", "modelo": "A3", "versao": "2.0 TFSI 4P", "cambio": "Automático", "valor": 132.51},
	];

}
