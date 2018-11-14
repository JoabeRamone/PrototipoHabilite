import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {Abaut_3Page} from "../abaut-3/abaut-3";
import {QuestionarioProvider} from "../../providers/questionario/questionario";


/**
 * Generated class for the Abaut_2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abaut-2',
  templateUrl: 'abaut-2.html',
})
export class Abaut_2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, private questionario : QuestionarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Abaut_2Page');
  }

  pushPage(resposta) {
    this.questionario.responderPergunta('questao 2', resposta);
    this.navCtrl.push(Abaut_3Page);

  }
}


