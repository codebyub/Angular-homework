import {Component, OnInit} from '@angular/core';
import {User} from '../User';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClientService} from '../../../http-client.service';
import {UserStorageService} from '../../../user-storage.service';

@Component({
  selector: 'app-users-editor',
  templateUrl: './users-editor.component.html',
  styleUrls: ['./users-editor.component.css']
})
export class UsersEditorComponent implements OnInit {

  constructor(private userStorage: UserStorageService, private activeRoute: ActivatedRoute, private router: Router, private httpClient: HttpClientService) {
  }

  user: User = new User();

  ngOnInit(): void {
    this.getUserToEdit();
  }

  saveUser(user: User) {
    this.httpClient.saveUser(user).subscribe(r => {
      this.router.navigate(['/shop/users']);
    });
  }

  getUserToEdit() {
    this.activeRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        // tslint:disable-next-line:radix
        this.httpClient.getUser(Number.parseInt(id)).subscribe(p => this.user = p);
      }
    });
  }
}
