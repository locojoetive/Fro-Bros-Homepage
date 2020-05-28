import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fb-games',
  templateUrl: './fb-container-games.component.html',
  styleUrls: ['./fb-container-games.component.scss']
})
export class FbContainerGamesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getPaperFighterStyle() {
    return  {
      color : 'black',
      'background-color': '#82b2dc70',
      border: '2px',
      'border-radius': '10px'
    };
  }
}
