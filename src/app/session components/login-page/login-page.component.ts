import {Component, Input} from '@angular/core';
import {EmployeeService} from "../../employee/employee.service";
import {ClientServiceService} from "../../client/client-service.service";
import {Client} from "../../client/client";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  @Input() login: string;
  @Input() password: string;
  @Input() passwordAgain: string;

  client: Client | undefined;
  constructor(private clientServiceService: ClientServiceService) {
  }

  getEntitySingle(id: number) {
    this.clientServiceService.getEntityById(id).subscribe(data =>
      this.client = data);
  }

  registerUserFunction() {
    this.clientServiceService.loginUser()
  }





}
