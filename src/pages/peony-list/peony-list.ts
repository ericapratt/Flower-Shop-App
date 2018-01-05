import { BuyPage } from './../buy/buy';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PeonyListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-peony-list',
  templateUrl: 'peony-list.html',
})
export class PeonyListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

name: string;

buy(name){
  this.navCtrl.push(BuyPage, {productName: name});
}

//goHome() begins here-->

goHome(){
  this.navCtrl.pop();
}

}
