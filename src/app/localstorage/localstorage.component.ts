import { Component } from '@angular/core';

@Component({
  selector: 'app-localstorage',
  templateUrl: './localstorage.component.html',
  styleUrls: ['./localstorage.component.scss']
})
export class LocalstorageComponent {

  username: string = '';
  password: string = '';

  login() {
    // You should validate the username and password here against a real user database or server.
    // For this example, we'll simulate a successful login and store credentials in localStorage.
    if (this.username === 'ankit' && this.password === 'abc') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', this.username);
      localStorage.setItem('password',this.password);
      alert('Login successful!');
      console.log(this.username, this.password)
    } else {
      alert('Login failed. Please check your credentials.');
    }
  }
}
