import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CriptoComponent } from './cripto/cripto.component';

const routes: Routes = [

  {
    path: 'cripto', component: CriptoComponent
  },
  { path: 'account', loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule) },
  { path: 'criptomoneda', loadChildren: () => import('./modules/criptomoneda/criptomoneda.module').then(m => m.CriptomonedaModule) },
  {
    path: '**', component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
