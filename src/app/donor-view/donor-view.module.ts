import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonorViewPageRoutingModule } from './donor-view-routing.module';

import { DonorViewPage } from './donor-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonorViewPageRoutingModule
  ],
  declarations: [DonorViewPage]
})
export class DonorViewPageModule {}
