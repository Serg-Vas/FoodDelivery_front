import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ShopsService } from './services/shops.service';
import { LoginComponent } from './components/login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, LoginComponent],
})
export class AppComponent implements OnInit {

  authName: string = '';
  isLoggedIn: boolean = false;
  shops: any[] = [];
  token: string = '';

  constructor(
    private authService: AuthService,
    private shopsService: ShopsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadShops();
    this.loadUserData();
  }

  loadShops() {
    this.shopsService.getShops().subscribe(
      (shops) => {
        this.shops = shops;
      },
      (error) => {
        console.error('Error loading shops:', error);
      }
    );
  }

  loadUserData() {
    const userData = this.authService.getUserData();
    if (userData) {
      this.authName = userData.name;
      this.isLoggedIn = true;
      this.token = this.authService.getToken();
    }
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  handleAuthNameChange(authName: string) {
    this.authName = authName;
    console.log('Authenticated user:', authName);
  }

  handleToken(token: string) {
    localStorage.setItem('token', token);
    console.log('Token saved:', token);
  }
}
