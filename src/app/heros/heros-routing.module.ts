import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosComponent } from './heros/heros.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'heros' },
  { path: 'heros', component: HerosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HerosRoutingModule { }
