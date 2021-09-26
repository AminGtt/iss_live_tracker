import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sky-tracker',
  templateUrl: './sky-tracker.component.html',
  styleUrls: ['./sky-tracker.component.scss']
})
export class SkyTrackerComponent implements OnInit {

  @Input() geojson: any;

  @Input() long: number;
  @Input() lat: number;

  constructor() { }

  ngOnInit(): void {
  }
}
