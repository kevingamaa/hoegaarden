import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventoComponent } from './pages/evento/evento.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent},
  {path: 'home/:content', component: HomeComponent},
  {path: 'evento/:id', component: EventoComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**',  redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
