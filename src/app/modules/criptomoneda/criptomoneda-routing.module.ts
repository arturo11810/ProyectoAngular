import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriptomonedaComponent } from './criptomoneda.component';
import { CriptoListComponent } from './pages/cripto-list/cripto-list.component';

const routes: Routes = [
  {path: 'lista', component: CriptoListComponent},
  { path: '', component: CriptomonedaComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriptomonedaRoutingModule { }
