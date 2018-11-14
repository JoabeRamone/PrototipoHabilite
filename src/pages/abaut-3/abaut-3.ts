import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ContactPage} from "../contact/contact";
import {QuestionarioProvider} from "../../providers/questionario/questionario";

/**
 * Generated class for the Abaut_3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abaut-3',
  templateUrl: 'abaut-3.html',
})
export class Abaut_3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private questionario : QuestionarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Abaut_3Page');
  }


  pushPage(resposta) {
    this.questionario.responderPergunta('questao 3', resposta);
    this.navCtrl.push(ContactPage);

  }
}
