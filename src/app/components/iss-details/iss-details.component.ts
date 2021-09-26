import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-iss-details',
  templateUrl: './iss-details.component.html',
  styleUrls: ['./iss-details.component.scss']
})
export class IssDetailsComponent implements OnInit {

  @Input() alt: number;
  @Input() vel: number;
  @Input() long: number;
  @Input() lat: number;

  constructor() { }

  ngOnInit(): void {
  }
}
