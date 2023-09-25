import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from 'src/app/components/home/home.component';
import { OfertasNovedadesComponent } from 'src/app/components/ofertas-novedades/ofertas-novedades.component';
import { PlatosVendidosComponent } from 'src/app/components/platos-vendidos/platos-vendidos.component';
import { SlideCarouselComponent } from 'src/app/components/slide-carousel/slide-carousel.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    HomeComponent,
    OfertasNovedadesComponent,
    PlatosVendidosComponent,
    SlideCarouselComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ]
})
export class HomeModule { }
