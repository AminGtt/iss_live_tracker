import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ground-tracker',
  templateUrl: './ground-tracker.component.html',
  styleUrls: ['./ground-tracker.component.scss']
})
export class GroundTrackerComponent implements OnInit {

  @Input() geojson: any;

  @Input() long: number;
  @Input() lat: number;

  constructor() { }

  ngOnInit(): void {
  }
}
