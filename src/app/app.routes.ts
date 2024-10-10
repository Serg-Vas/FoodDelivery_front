import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

export const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Wildcard route to handle invalid paths
];
