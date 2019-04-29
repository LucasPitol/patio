import { Routes, RouterModule } from "@angular/router";
import { AutosComponent } from './pages/autos/autos.component';
import { HomeComponent } from './pages/home/home.component';
import { AnunciarComponent } from './pages/anunciar/anunciar.component';
import { AnuncioComponent } from './pages/anuncio/anuncio.component';

const appRoutes: Routes = [
    { path: 'autos', component: AutosComponent},
    { path: 'home', component: HomeComponent },
    { path: 'anunciar', component: AnunciarComponent},
    { path: 'anuncio/:idanuncio', component: AnuncioComponent }
]

export const routing = RouterModule.forRoot(appRoutes);
