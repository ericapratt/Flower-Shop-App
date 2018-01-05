import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html',
})
export class BuyPage implements OnInit {

  name: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit(){
    this.name = this.navParams.get('productName');
  }

 //goHome() begins here-->

goHome(){
  this.navCtrl.pop();
}

}
