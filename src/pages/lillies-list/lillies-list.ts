import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyPage } from '../buy/buy';

/**
 * Generated class for the LilliesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lillies-list',
  templateUrl: 'lillies-list.html',
})
export class LilliesListPage {

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
