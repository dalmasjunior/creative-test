import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {
  transactions: TransactionsService = new TransactionsService();

  activeUsers: Boolean = false;

  constructor(public router: Router) { }

  ngOnInit() {
    this.activeUsers = this.router.url === '/users';
  }

  logoff(): void {
    this.transactions.logoff();
    this.router.navigate(['/login']);
  }

}
