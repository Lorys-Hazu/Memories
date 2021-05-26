import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  data:Card = new Card;

  @Output() messageEvent = new EventEmitter<Card>()

  constructor() { }

  isFlipped:boolean = this.data.isFlipped

  toggleFlip(){
    this.messageEvent.emit(this.data)
    console.log(this.data)
  }



  ngOnInit(): void {
  }

  

}
