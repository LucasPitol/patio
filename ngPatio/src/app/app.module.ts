import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.router';

import { MatTabsModule, MatLabel, MatFormField, MatIcon, MatHint, MatFormFieldModule, MatInputModule, MatRippleModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule, MatSelectModule, MatAutocompleteModule, MatRadioModule, MatSidenavModule, MatExpansionModule, MatDatepickerModule, MatNativeDateModule, MatDividerModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutosComponent } from './pages/autos/autos.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './pages/card/card.component';
import { AnunciarComponent } from './pages/anunciar/anunciar.component';
import { FilterService } from './services/filter-service';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { AnuncioComponent } from './pages/anuncio/anuncio.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { DBService } from './services/db-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AutosComponent,
    CardComponent,
    AnunciarComponent,
    AnuncioComponent
  ],
  imports: [
	routing,
	BrowserModule,
	AngularFireModule.initializeApp(environment.firebase),
	AngularFireDatabaseModule,
    AppRoutingModule,
    // HttpModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatSidenavModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  providers: [
	FilterService,
	DBService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
