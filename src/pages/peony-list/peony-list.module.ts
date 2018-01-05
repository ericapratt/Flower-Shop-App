import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeonyListPage } from './peony-list';

@NgModule({
  declarations: [
    PeonyListPage,
  ],
  imports: [
    IonicPageModule.forChild(PeonyListPage),
  ],
})
export class PeonyListPageModule {}
