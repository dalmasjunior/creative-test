import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { TransactionsService } from 'src/app/services/transactions.service';

export interface DialogData {
  username: string;
  update: Boolean;
}

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent implements OnInit {
  transactions: TransactionsService = new TransactionsService();

  user: any;
  username: string;

  constructor(
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UsersDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
    if (this.data.update) {
      this.username = this.data.username;
      this.user = this.transactions.getUser(this.username);
    } else {
      this.user = {
        name: '',
        username: '',
        password: '',
        admin: false
      };
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.data.update) {
      console.log(this.user);
      this.transactions.updateUser(this.username, this.user);
    } else {
      this.transactions.newUser(this.user);
    }

    this.snackBar.open('Users saved!', 'Success', {duration: 2000});
  }
}
