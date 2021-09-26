import {Component, OnDestroy, OnInit} from '@angular/core';
import {PositionService} from '../../services/position.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit, OnDestroy{

  geojson: any;

  long: number;
  lat: number;
  alt: number;
  vel: number;

  longSub: Subscription;
  latSub: Subscription;
  altSub: Subscription;
  velSub: Subscription;

  constructor(private positionService: PositionService) { }

  ngOnInit(): void {
    this.longSub = this.positionService.long.subscribe((long) => {
      this.long = long;
    });
    this.latSub = this.positionService.lat.subscribe((lat) => {
      this.lat = lat;
    });
    this.altSub = this.positionService.alt.subscribe((alt) => {
      this.alt = alt;
    });
    this.velSub = this.positionService.vel.subscribe((vel) => {
      this.vel = vel;
    });

    setInterval(() => {
      this.positionService.getISSPosition();

      this.geojson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [this.long, this.lat]
            }
          }
        ]
      };

    }, 2000);
  }

  ngOnDestroy(): void {
    this.longSub.unsubscribe();
    this.latSub.unsubscribe();
    this.altSub.unsubscribe();
    this.velSub.unsubscribe();
  }
}
