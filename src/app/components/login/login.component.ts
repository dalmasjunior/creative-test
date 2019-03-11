import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: String;
  public password: String;

  transactions: TransactionsService = new TransactionsService();
  constructor(private router: Router) { }

  ngOnInit() {
    this.transactions.persistData();
  }

  login() {
    if (this.transactions.login(this.username, this.password)) {
      this.router.navigate(['/users']);
    }
  }
}
