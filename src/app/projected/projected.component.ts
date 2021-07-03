import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-projected',
  templateUrl: './projected.component.html',
  styleUrls: ['./projected.component.scss']
})
export class ProjectedComponent implements OnInit, OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    console.log('projected app destroyed')
  }

  ngOnInit(): void {
    console.log('projected app on init')
  }

}
