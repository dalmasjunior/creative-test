import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';

import { UsersDetailComponent } from '../users-detail/users-detail.component';

import { TransactionsService } from '../../services/transactions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  transactions: TransactionsService = new TransactionsService();

  isAdmin:  Boolean = false;
  usersList: Array<any>;

  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit() {
    if (this.transactions.isLogged()) {
      this.isAdmin = this.transactions.isAdmin();
      this.usersList = this.transactions.listUsers().users;
    } else {
      this.router.navigate(['/login']);
    }
  }

  openDetail(user) {
    const dialogRef = this.dialog.open(UsersDetailComponent, {data: {username: user, update: true}});
    this.reloadPageAfterDialogClose(dialogRef);
  }

  newUser() {
    const dialogRef = this.dialog.open(UsersDetailComponent, {data: {username: '', update: false}});
    this.reloadPageAfterDialogClose(dialogRef);
  }

  reloadPageAfterDialogClose(dialogRef) {
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }
}
