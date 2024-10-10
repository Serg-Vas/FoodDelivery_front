import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true, // This makes it a standalone component
  imports: [CommonModule, FormsModule], // Include necessary modules
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showModal: boolean = false;
  username: string = '';
  password: string = '';

  @Output() onAuthNameChange = new EventEmitter<string>();
  @Output() getToken = new EventEmitter<string>();

  handleLogin() {
    // Handle login logic here
    const token = 'some-jwt-token'; // Simulate a token (usually you'd get this from a service)
    this.onAuthNameChange.emit(this.username); // Emit username
    this.getToken.emit(token); // Emit token
    this.closeModal(); // Close the modal after successful login
  }

  closeModal() {
    this.showModal = false;
  }
}


// import { Component, EventEmitter, Output } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { ApiService } from '../../services/api.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss'],
//   standalone: true,
//   imports: [FormsModule],
// })
// export class LoginComponent {
//   @Output() authNameChange = new EventEmitter<string>();
//   @Output() login = new EventEmitter<string>();

//   username: string = 'Serhii Vasylevskyi';
//   password: string = 'qwerty';
//   showModal: boolean = false;
//   token: string | null = null;

//   constructor(private apiService: ApiService) {}

//   handleLogin() {
//     this.apiService.getUsers(this.username, this.password).subscribe(
//       response => {
//         console.log('User authenticated successfully:', response);
//         // Handle successful login, e.g., get JWT token and store it
//         this.apiService.createJWT(response.data).subscribe(
//           tokenResponse => {
//             console.log('JWT Token:', tokenResponse);
//             localStorage.setItem('token', tokenResponse.token); // Assuming token is in tokenResponse
//           },
//           error => {
//             console.error('Error generating JWT:', error);
//           }
//         );
//       },
//       error => {
//         console.error('Invalid username or password:', error);
//         this.showModal = true; // Display the modal if login fails
//       }
//     );
//   }

//   closeModal() {
//     this.showModal = false;
//   }
// }
