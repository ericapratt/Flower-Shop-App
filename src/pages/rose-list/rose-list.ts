import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyPage } from '../buy/buy';

/**
 * Generated class for the RoseListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rose-list',
  templateUrl: 'rose-list.html',
})
export class RoseListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

//-- click function for buying begins here--
name: string;
buy(name){
this.navCtrl.push(BuyPage, {productName : name});
}

//goHome() begins here-->

goHome(){
  this.navCtrl.pop();
}

}
