import { Component } from '@angular/core';
import {App, NavController, ViewController} from 'ionic-angular';
import {Home_2Page} from "../home-2/home-2";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController,
              public appCtrl: App) {

  }

  pushPage(){
    this.navCtrl.push(Home_2Page);
  }

}
