import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  constructor (private httpClient: HttpClient) {}


  method1Call() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(
      success => {
        console.log('successfully completed');
        console.log(success);
      }
    );
  }

  method2Call() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/users12').subscribe(
      success => {
        console.log('successfully completed');
        console.log(success);
      }
    );
  }


}
