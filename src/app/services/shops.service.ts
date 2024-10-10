import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopsService {
  private host = 'http://18.197.164.43';

  constructor(private http: HttpClient) {}

  getShops(): Observable<any[]> {
    return this.http.get<any[]>(`${this.host}/DeliveryBack/SelectRestaurants.php`);
  }
}
