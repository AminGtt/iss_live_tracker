import { Component } from '@angular/core';
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iss-position-tracker';

  // firebaseConfig = {
  //   apiKey: 'AIzaSyDTfZSaZIq4x6yP0YiFAI_wnNI1i7ISzPU',
  //   authDomain: 'iss-live-tracker-baaee.firebaseapp.com',
  //   projectId: 'iss-live-tracker-baaee',
  //   storageBucket: 'iss-live-tracker-baaee.appspot.com',
  //   messagingSenderId: '102612929795',
  //   appId: '1:102612929795:web:e4d915769c5d6439ccad36',
  //   measurementId: 'G-JB4TZ8R887'
  // };
  //
  // app = initializeApp(this.firebaseConfig);
  // analytics = getAnalytics(this.app);
}
