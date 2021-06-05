import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  numbers:number[]
  constructor() { 
    this.numbers = Array(5).fill(4);
  }

  ngOnInit(): void {
  }

}
