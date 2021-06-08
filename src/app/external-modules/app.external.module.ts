/** 
 * ini Module buat jadi child, kalo mau dijalakan lewat container
*/


import {CommonModule} from '@angular/common'
import {AppCommonModule} from "../app.common.module";
import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router';

import {appStates} from '../app.states'


@NgModule({
  imports: [
    AppCommonModule, 
    CommonModule, 
    RouterModule.forChild(appStates)
  ],
  declarations: [],
  bootstrap: [],
  entryComponents: [],
  providers: [],
  exports: [RouterModule]
})

export class AppModule {
}

