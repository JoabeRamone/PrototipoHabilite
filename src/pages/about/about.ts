import { Component } from '@angular/core';
import { NavController,App, ViewController } from 'ionic-angular';
import { Abaut_2Page } from '../abaut-2/abaut-2';
import {QuestionarioProvider} from "../../providers/questionario/questionario";
import {ContactPage} from "../contact/contact";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,
              public appCtrl: App, public questionario : QuestionarioProvider) {
  }

  questao1(resposta) {
    this.questionario.responderPergunta('questao 1', resposta);

    this.navCtrl.push(Abaut_2Page);
  }
}

