import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material';

import { HerosRoutingModule } from './heros-routing.module';
import { HerosComponent } from './heros/heros.component';
import { HeroDataService } from './hero-data.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule,
    HerosRoutingModule
  ],
  declarations: [HerosComponent],
  providers: [HeroDataService]
})
export class HerosModule { }
