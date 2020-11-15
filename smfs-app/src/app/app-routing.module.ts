import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WizzendComponent} from "./wizzend/wizzend.component";
import {CovidComponent} from "./covid/covid.component";

const routes: Routes = [{path: 'wizzend', component: WizzendComponent},{path: 'covid', component: CovidComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
