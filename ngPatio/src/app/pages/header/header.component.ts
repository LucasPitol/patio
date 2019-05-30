import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Utils } from '../../utils/utils';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

	constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router) 
        {
            // this.idcard = Number(
            //     this.activatedRoute.snapshot.paramMap.get("idcard")
            // );

        }

    

    title = 'Patio';

    searchInput: string;

    menuImageUrl = 'assets/menu.png';

	anunciar()
	{
		Utils.anunciar(this.router);
	}

    goHome() 
    {
		Utils.goHome(this.router);
	}
}
