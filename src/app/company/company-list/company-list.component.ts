import {Component, OnInit} from '@angular/core';
import {Company} from "../company";
import {AbstractBasicFunctions} from "../../BasicFunctionalityForClasses/abstract-basic-functions";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent extends AbstractBasicFunctions<Company> implements OnInit {
  ngOnInit(): void {
    this.getEntityAll();
  }

  constructor(private companyService: CompanyService) {
    super(companyService);
  }

}
