import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeListComponent} from "./employee/employee-list/employee-list.component";
import {CompanyListComponent} from "./company/company-list/company-list.component";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {LoginPageComponent} from "./session components/login-page/login-page.component";
import {RegisterPageComponent} from "./session components/register-page/register-page.component";

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
  {
    path: 'login',
    component:LoginPageComponent
  }, {
    path: 'signUp',
    component: RegisterPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
