import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() public show = false;
  @ContentChild(TemplateRef) public contentTemplate!: TemplateRef<any>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
