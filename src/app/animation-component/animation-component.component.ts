import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-component',
  templateUrl: './animation-component.component.html',
  styleUrls: ['./animation-component.component.css'],
  animations:[
    trigger('divState', [
      state('yellow', style({
        'background-color': 'yellow',
        transform: 'rotateZ(0deg)'
      })),
      state('red', style({
        'background-color': 'red',
        transform: 'rotateZ(90deg)'
      })),
      transition('yellow <=> red', animate(800)),
      // transition('highlighted => normal', animate(800))
    ])
  ]
})
export class AnimationComponentComponent implements OnInit {
  state = 'yellow';
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.state == 'yellow' ? this.state = 'red' : this.state = 'yellow';
  }
}
