// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const host = "18.197.164.43"; // Your host
const API_URL2 = `http://${host}/DeliveryBack/InsertUser.php`;
const API_URL3 = `http://${host}/DeliveryBack/CheckUser.php`;
const API_URL4 = `http://${host}/DeliveryBack/Token.php`;
const API_URL5 = `http://${host}/DeliveryBack/CreateOrder.php`;
const API_URL6 = `http://${host}/DeliveryBack/generateToken.php`;
const API_URL7 = `http://${host}/DeliveryBack/getInfo.php`;
const API_URL8 = `http://${host}/DeliveryBack/SelectRestaurant.php`;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  selectRestaurant(id: number): Observable<any> {
    return this.http.get(`${API_URL8}?restaurant_id=${id}`);
  }

  getToken(username: string, password: string): Observable<any> {
    return this.http.post(API_URL4, { name: username, password });
  }

  getUsers(username: string, password: string): Observable<any> {
    return this.http.post(API_URL3, { name: username, password });
  }

  createUser(user: any): Observable<any> {
    return this.http.post(API_URL2, user);
  }

  createJWT(userData: any): Observable<any> {
    return this.http.post(API_URL6, userData);
  }

  // decodeJWT(): Observable<any> {
  //   return this.http.post(API_URL7, {}, {
  //     headers: {
  //       'Authorization': localStorage.getItem("token"),
  //     },
  //   });
  // }

  createOrder(order: any): Observable<any> {
    return this.http.post(API_URL5, order);
  }
}
