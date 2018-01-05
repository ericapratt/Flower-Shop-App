import { PeonyListPage } from './../peony-list/peony-list';
import { LilliesListPage } from './../lillies-list/lillies-list';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoseListPage } from './../rose-list/rose-list';
import { TulipsListPage } from './../tulips-list/tulips-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
// <-- go to rose list page function starts here -->
goToRoseList(){
  this.navCtrl.push(RoseListPage);
}

// <-- go to lillies list page function starts here -->
goToLilliesList(){
  this.navCtrl.push(LilliesListPage);
}

goToPeonyList(){
  this.navCtrl.push(PeonyListPage);
}

goToTulipsList(){
  this.navCtrl.push(TulipsListPage);
}



}