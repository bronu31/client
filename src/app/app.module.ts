import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import {provideHttpClient} from "@angular/common/http";
import {CompanyListComponent} from "./company-list/company-list.component";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {HeaderButtonsComponent} from "./utils/header-buttons/header-buttons.component";
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CompanyListComponent,
    ProductListComponent,
    HeaderButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbDropdownModule, MdbRippleModule,

  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
