import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonorsListPage } from './donors-list.page';

const routes: Routes = [
  {
    path: '',
    component: DonorsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonorsListPageRoutingModule {}
