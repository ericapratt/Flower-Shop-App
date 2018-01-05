import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoseListPage } from './rose-list';

@NgModule({
  declarations: [
    RoseListPage,
  ],
  imports: [
    IonicPageModule.forChild(RoseListPage),
  ],
})
export class RoseListPageModule {}
