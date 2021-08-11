import { state, transition } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import {trigger, style, animate} from '@angular/animations'

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css'], 
  animations:[
    trigger('smoothCollapse', [
      state('initial', style({
height: '0',
overflow: 'hidden', 
opacity:'0', 
visibility: 'hidden'
      })),
      state('final', style({
        overflow: 'hidden'
      })), 
      transition('initial<=>final', animate('300ms'))
    ])
  ]
})
export class AccordionItemComponent implements OnInit {

  @Input() title: string = "Первая вкладка"; 
  showBody = false; 
  constructor() { }

  ngOnInit(): void {
  }

  toogle(){
    this.showBody = !this.showBody;
  }
}
