import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WizzendComponent } from './wizzend/wizzend.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import { CovidComponent } from './covid/covid.component';


import {GoogleAnalyticsService} from './google-analytics.service';
import { WindfallComponent } from './windfall/windfall.component';


const routes: Routes = [
  {path: 'wizzend', component: WizzendComponent },
  {path: 'senior', component: CovidComponent},
  {path: 'windfall', component: WindfallComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WizzendComponent,
    CovidComponent,
    WindfallComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [GoogleAnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
