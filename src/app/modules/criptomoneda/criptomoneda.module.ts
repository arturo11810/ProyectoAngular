import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriptomonedaRoutingModule } from './criptomoneda-routing.module';
import { CriptomonedaComponent } from './criptomoneda.component';
import { CriptoListComponent } from './pages/cripto-list/cripto-list.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pages/cripto-list/pipes/filter.pipe';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    CriptomonedaComponent,
    CriptoListComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    CriptomonedaRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class CriptomonedaModule { }
