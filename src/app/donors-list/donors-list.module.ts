import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonorsListPageRoutingModule } from './donors-list-routing.module';

import { DonorsListPage } from './donors-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonorsListPageRoutingModule
  ],
  declarations: [DonorsListPage]
})
export class DonorsListPageModule {}
