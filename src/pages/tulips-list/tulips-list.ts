import { BuyPage } from './../buy/buy';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TulipsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tulips-list',
  templateUrl: 'tulips-list.html',
})
export class TulipsListPage {

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
