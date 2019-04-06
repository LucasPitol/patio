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
	}
}