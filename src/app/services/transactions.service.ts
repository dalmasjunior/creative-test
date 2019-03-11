import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private value;
  private startedData;
  constructor() {}

  public login (username, password) {
    let logged: Boolean = false;
    const listUsers = this.getStorage('users');
    const userObj = listUsers.users.find(user => user.username === username);
    console.log(userObj);
    if (userObj.password === password) {
      this.setLogged(userObj);
      logged = true;
    }

    return logged;
  }

  public newUser(user) {
    const listUsers = this.getStorage('users');
    listUsers.users.push(user);
    this.setStorage('users', listUsers);
  }

  public updateUser(username, data) {
    const listUsers = this.getStorage('users');

    const userObj = listUsers.users.find(user => user.username === username);
    const index = listUsers.users.indexOf(userObj);
    listUsers.users[index] = data;

    console.log(listUsers);
    this.setStorage('users', listUsers);
  }

  public listUsers() {
    return this.getStorage('users');
  }

  public getUser(username) {
    const listUsers = this.getStorage('users');
    const userObj = listUsers.users.find(user => user.username ===  username);
    return userObj;
  }

  public isAdmin() {
    return this.getStorage('logged').admin;
  }

  public logoff() {
    localStorage.removeItem('logged');
  }

  public persistData() {
    if (this.getStorage('users') === null) {
      this.initializeMockedValues();
    }
  }

  public isLogged() {
    const logged = this.getStorage('logged');
    return logged != null;
  }

  public initializeMockedValues() {
    this.startedData = {users: [
      {name: 'Administrador', username: 'admin', password: 'admin', admin: true}
    ]};

    this.setStorage('users', this.startedData);
  }

  private setStorage(key, data) {
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(data));
  }

  private getStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  private setLogged(user) {
    this.setStorage('logged', user);
  }
}
