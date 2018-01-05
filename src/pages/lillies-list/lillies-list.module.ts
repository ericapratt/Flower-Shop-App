import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LilliesListPage } from './lillies-list';

@NgModule({
  declarations: [
    LilliesListPage,
  ],
  imports: [
    IonicPageModule.forChild(LilliesListPage),
  ],
})
export class LilliesListPageModule {}
