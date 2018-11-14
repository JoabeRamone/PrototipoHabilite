// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the QuestionarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestionarioProvider {

  questionario = {

    "questao 1":{
      "gabarito" : "regulamentação"
     },
     "questao 2":{
      "gabarito" : "galho"
     },
    "questao 3":{
      "gabarito" : "direita"
    }

  };

  questoesRespondidas = [];

  constructor() {
    console.log('Hello QuestionarioProvider Provider');
  }

  responderPergunta(nome, resposta){
    this.questoesRespondidas.push({
      "pergunta" : nome , "resposta" : resposta
    });



    // return this.questionario[nome].gabarito === resposta;
  }

  conferirRespostas(){
    let respostasConferidas = [];
    this.questoesRespondidas.forEach(questaoRespondida => {
      respostasConferidas.push({
        "pergunta" : questaoRespondida.pergunta,
        "resultado" : this.questionario[questaoRespondida.pergunta].gabarito === questaoRespondida.resposta
      });
    });

    return respostasConferidas;
  }
  zerarQuestoes(){
    this.questoesRespondidas = [];
  }

}
