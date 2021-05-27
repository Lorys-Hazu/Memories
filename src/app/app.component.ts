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
    // Si on est en train de jouer des animations on bloque les actions
    if (this.processing){return}
    // on récupere le message envoyé via le emit par le composant
    this.message = $event
    // Si la carte est déjà retournée on ne continue pas l'action
    if (this.message.isFlipped){return}
    // On retourne la carte selectionnée
    this.message.isFlipped = !this.message.isFlipped

    // Si on a pas encore de premiere carte on la stocke
    if (!this.firstFlipped){
      this.firstFlipped = $event
      return
    }
    // So on a pas encore de deuxieme carte on la stocke
    if (!this.lastFlipped){
      this.lastFlipped = $event
    }
    // On lance le process + les animations
    this.processing = true
    // via un timeout pour laisser du temps aux anims de se faire
    setTimeout(()=>{
      // On verifie si les deux cartes sont identiques
      if (this.lastFlipped?.name === this.firstFlipped?.name){
        // Si elles le sont on les ajoutent aux cartes déjà flip
        this.flippedCards.push(this.lastFlipped!)
      } else {
        // Si elle ne le sont pas on les re-flip face cachée
        this.firstFlipped!.isFlipped = false
        this.lastFlipped!.isFlipped = false
      }
      // On vide ensuite nos variable et on enlève le processus pour que le joueur puisse rejouer
      this.firstFlipped = undefined
      this.lastFlipped = undefined
      this.processing = false;
    }, 500);
    }

  }



