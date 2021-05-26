import { Component, OnInit } from '@angular/core';
import { Card } from './card';
import { CardService } from './card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public list:Card[] = [];

  constructor(private _cardService: CardService){

  }
  ngOnInit(){
    this.list = this.setupCards(this._cardService.getCards())
  }

  message:Card = new Card
  public isPair: boolean = false
  public counter:number = 0;
  public flippedCards:Array<Card> = [];
  public firstFlipped!:Card | undefined;
  public lastFlipped!:Card | undefined;
  public processing: boolean= false;
  setupCards(array:Array<Card>):Array<Card> {
    array.sort(() => Math.random() - 0.5);
    return array
  }
  
  receiveMessage($event:Card){
    if (this.processing){return}
    this.message = $event
    this.message.isFlipped = !this.message.isFlipped

    if (!this.firstFlipped){
      this.firstFlipped = $event
      return
    }
    if (!this.lastFlipped){
      this.lastFlipped = $event
    }
    this.processing = true
    setTimeout(()=>{
      if (this.lastFlipped?.name === this.firstFlipped?.name){
        this.flippedCards.push(this.lastFlipped!)
      } else {
        this.firstFlipped!.isFlipped = false
        this.lastFlipped!.isFlipped = false
      }
      this.firstFlipped = undefined
      this.lastFlipped = undefined
      this.processing = false;
    }, 500);
    }

  }



