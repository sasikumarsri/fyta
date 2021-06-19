import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  { 
    path: '', 
    component: AdminComponent 
  }, {
    path: 'dashboard', 
    component: DashboardComponent 
  },{
    path: 'reports', 
    component: ReportsComponent 
  }, {
    path: 'products', 
    component: ProductsComponent 
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
