import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './employee/list/list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddComponent } from './employee/add/add.component';


const routes: Routes = [
{  path : '' ,redirectTo :'/list', pathMatch:'full' }, 
{  path : 'list' ,component :ListComponent }, 
{  path : 'add' ,component :AddComponent }, 
{  path : 'edit/:id' ,component :AddComponent }, 
{  path : '**' , component : PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
