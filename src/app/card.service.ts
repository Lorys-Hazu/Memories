import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCards(){
    return [
      {
        id:0,
        name:"The Fool",
        img:"/assets/the-fool.png",
        isFlipped:false
      },
      {
        id:1,
        name:"The Magician",
        img:"/assets/the-magician.png",
        isFlipped:false
      },
      {
        id:2,
        name:"The High Priestess",
        img:"/assets/the-high-priestess.png",
        isFlipped:false
      },
      {
        id:3,
        name:"The Empress",
        img:"/assets/the-empress.png",
        isFlipped:false
      },
      {
        id:3,
        name:"The Emperor",
        img:"/assets/the-emperor.png",
        isFlipped:false
      },
      {
        id:4,
        name:"The Hierophant",
        img:"/assets/the-hierophant.png",
        isFlipped:false
      },
      {
        id:5,
        name:"The Lovers",
        img:"/assets/the-lovers.png",
        isFlipped:false
      },
      {
        id:6,
        name:"The Chariot",
        img:"/assets/the-chariot.png",
        isFlipped:false
      },
      {
        id:7,
        name:"Justice",
        img:"/assets/justice.png",
        isFlipped:false
      },
      {
        id:8,
        name:"The Fool",
        img:"/assets/the-fool.png",
        isFlipped:false
      },
      {
        id:9,
        name:"The Magician",
        img:"/assets/the-magician.png",
        isFlipped:false
      },
      {
        id:10,
        name:"The High Priestess",
        img:"/assets/the-high-priestess.png",
        isFlipped:false
      },
      {
        id:11,
        name:"The Empress",
        img:"/assets/the-empress.png",
        isFlipped:false
      },
      {
        id:12,
        name:"The Emperor",
        img:"/assets/the-emperor.png",
        isFlipped:false
      },
      {
        id:13,
        name:"The Hierophant",
        img:"/assets/the-hierophant.png",
        isFlipped:false
      },
      {
        id:14,
        name:"The Lovers",
        img:"/assets/the-lovers.png",
        isFlipped:false
      },
      {
        id:15,
        name:"The Chariot",
        img:"/assets/the-chariot.png",
        isFlipped:false
      },
      {
        id:16,
        name:"Justice",
        img:"/assets/justice.png",
        isFlipped:false
      }
    ]
  }


}
