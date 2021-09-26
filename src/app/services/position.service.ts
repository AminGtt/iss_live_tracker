import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  long: BehaviorSubject<number>;
  lat: BehaviorSubject<number>;
  alt: BehaviorSubject<number>;
  vel: BehaviorSubject<number>;

  issResult: any;

  constructor(private httpClient: HttpClient) {
    this.long = new BehaviorSubject<number>(0);
    this.lat = new BehaviorSubject<number>(0);
    this.alt = new BehaviorSubject<number>(0);
    this.vel = new BehaviorSubject<number>(0);
  }

  getISSPosition(): void {
        this.httpClient
          .get('https://api.wheretheiss.at/v1/satellites/25544')
          .subscribe((result: any) => {
            this.issResult = result;
            this.lat.next(this.issResult.latitude);
            this.long.next(this.issResult.longitude);
            this.alt.next(this.issResult.altitude);
            this.vel.next(this.issResult.velocity);
          });
  }
}
