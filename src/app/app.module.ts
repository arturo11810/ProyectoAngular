import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
// import { PokemonComponent } from './pokemon/pokemon.component';
import { HomeComponent } from './home/home.component';
// import { CriptoListComponent } from './modules/criptomoneda/pages/cripto-list/cripto-list.component';
import { CriptoComponent } from './cripto/cripto.component';
import { environment } from '../environments/environment';
import { HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './core/interceptors/base-url.interceptor';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // CriptoListComponent,
    CriptoComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientXsrfModule
  ],
  providers: [
    //{provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi:true},
    //{provide: 'BASE_API_URL', useValue: environment.apiUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
