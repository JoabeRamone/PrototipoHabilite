import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {AboutPage} from '../about/about';
import {QuestionarioProvider} from "../../providers/questionario/questionario";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  questoes;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public questionario : QuestionarioProvider) {
  console.log(this.questionario.conferirRespostas());
  this.questoes = this.questionario.conferirRespostas();
  this.questionario.zerarQuestoes();
  }
  exibirModal(resposta){
    let titulo, subTitulo;
    if(resposta ){
      titulo = 'Parabéns';
      subTitulo = 'Questão correta!!!';
    } else {

      titulo = 'Infelizmente você errou';
      subTitulo = 'Estude mais as leis referentes a esta questão';
    }
    const alert = this.alertCtrl.create({
      title: titulo,
      subTitle: subTitulo,
      buttons: [{
        text: 'Tentar Novamente',
        handler: data => {
          //colocar um push page aqui em baixo
          this.navCtrl.push(AboutPage);
        }
      }]
    });
    alert.present();
  }
}
