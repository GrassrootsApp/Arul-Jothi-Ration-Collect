import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonationFormPageRoutingModule } from './donation-form-routing.module';

import { DonationFormPage } from './donation-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonationFormPageRoutingModule
  ],
  declarations: [DonationFormPage]
})
export class DonationFormPageModule {}
