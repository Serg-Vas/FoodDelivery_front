import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  @Input() shop: any[] = []; // This should be passed from the parent component
  @Input() token: string | null = null;

  constructor(private router: Router) {}

  navigateToShop(shopId: string) {
    this.router.navigate([`/${shopId}`]);
  }
}
