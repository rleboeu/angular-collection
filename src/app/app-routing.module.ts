import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DirecHomeComponent } from './components/direc/direc-home/direc-home.component';
import { CompHomeComponent } from './components/comp/comp-home/comp-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'directives', component: DirecHomeComponent },
  { path: 'components', component: CompHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
