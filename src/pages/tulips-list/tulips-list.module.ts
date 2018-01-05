import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { TulipsListPage } from './tulips-list';

@NgModule({
    declarations: [
        TulipsListPage,
    ],
    imports: [
      IonicPageModule.forChild( TulipsListPage),
    ],
  })
  export class  TulipsListPageModule {}