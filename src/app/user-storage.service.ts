import {Injectable} from '@angular/core';
import {User} from './shop/users/User';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() {
  }

  private users: User[] = [
    {id: 0, login: 'User_1', email: 'user1@wp.pl', age: 100, country: 'Polska', active: true},
    {id: 1, login: 'User_2', email: 'user2@onet.pl', age: 1, country: 'Polska', active: false},
  ];

  private idCount = 2;

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  removeUser(id: number) {
    const userIndex = this.users.findIndex(p => p.id === id);
    this.users.splice(userIndex, 1);
  }

  saveUser(user: User) {
    if (user.id) {
      const userIndex = this.users.findIndex(p => p.id === user.id);
      this.users[userIndex] = user;
    } else {
      user.id = this.idCount;
      this.users.push(user);
      this.idCount++;
    }
  }

  getUser(id: number) {
    const userIndex = this.users.findIndex(p => p.id === id);
    return {...this.users[userIndex]};
  }

}
