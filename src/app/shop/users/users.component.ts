import {Component, OnInit} from '@angular/core';
import {User} from './User';
import {HttpClientService} from '../../http-client.service';
import {UserStorageService} from '../../user-storage.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userStorage: UserStorageService, private httpClient: HttpClientService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.httpClient.getUsers().subscribe(users => this.users = users);
  }

  removeUser(id: number) {
    this.httpClient.removeUser(id).subscribe(r => {
      this.getUsers();
    });
  }
}
