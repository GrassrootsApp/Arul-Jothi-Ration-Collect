import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonorViewPage } from './donor-view.page';

const routes: Routes = [
  {
    path: '',
    component: DonorViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonorViewPageRoutingModule {}
