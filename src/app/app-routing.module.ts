import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './view/explore/explore.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
{ path: 'home',  component: HomeComponent },
{ path:'explore',component:ExploreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
