import { LilliesListPage } from './../pages/lillies-list/lillies-list';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RoseListPage } from '../pages/rose-list/rose-list';
import { PeonyListPage } from '../pages/peony-list/peony-list';
import { TulipsListPage } from '../pages/tulips-list/tulips-list';
import { BuyPage } from '../pages/buy/buy';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RoseListPage,
    LilliesListPage,
    PeonyListPage,
    TulipsListPage,
    BuyPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RoseListPage,
    LilliesListPage,
    PeonyListPage,
    TulipsListPage,
    BuyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
