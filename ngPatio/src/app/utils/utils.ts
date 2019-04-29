import { Router } from "@angular/router";

export const Utils = 
{
    // goToTheNew: function(idCard: number, router: Router)
	// {
	// 	router.navigate(["noticia/" + idCard]);
	// },

	anunciar: function(router: Router)
	{
		router.navigate(["anunciar"])
	},

	goHome: function(router: Router)
	{
		router.navigate(["home"])
	},

	goToListagemCards: function(router: Router)
	{
		router.navigate(["autos"])
	},

	goToAnuncio: function(idAnuncio: number)
	{
		let url = 'http://localhost:4200/anuncio/'

		window.open(url + idAnuncio);
	}
}