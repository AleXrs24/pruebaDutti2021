import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocalStorageService } from 'src/app/services/storage/local-storage.service';
// Interfaces
import { UserLocalStorage } from 'src/app/interfaces/user-local-storage';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  currentUser: UserLocalStorage = null;

  constructor(
    private localStorage: LocalStorageService,
    private auth: AuthService,
    private router: Router
  ) { }
    
  ngOnInit(): void {
    this.auth.getCurrentUser().subscribe(user => {
      this.currentUser = this.localStorage.get(user?.uid);
    });
  }

  logOut(): void {
    this.auth.signOut().then(() => {
      this.currentUser = null;
      this.router.navigate(['']);
    }).catch(error => {
      console.error('Log out fail: ', error);
    });
  }

}

