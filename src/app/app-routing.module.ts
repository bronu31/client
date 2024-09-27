import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from "./employee/employee-list/employee-list.component";
import {CompanyListComponent} from "./company-list/company-list.component";
import {ProductListComponent} from "./product/product-list/product-list.component";

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeeListComponent
  },
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full'
  },
  {
    path: 'companies',
    component: CompanyListComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'employees',
    component: EmployeeListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
