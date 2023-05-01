import { Component } from '@angular/core';
import {faker} from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  random_sentance = faker.lorem.sentence()
  players_text = "";

  gameOver : boolean = false;


  handleInput(userInput: any){
    let players_input = userInput.value

    this.players_text = players_input

    if (this.random_sentance === this.players_text){
      this.random_sentance = faker.lorem.sentence()
      userInput.value = '';
      this.players_text = '';
    }
  }

  compare(sentance_char:string, players_char:string){

    if(!players_char) return "pending";

    return players_char === sentance_char
    ? "correct"
    : "incorrect"

  }

}
