import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'donors-list',
    loadChildren: () => import('./donors-list/donors-list.module').then( m => m.DonorsListPageModule)
  },
  {
    path: 'donor-view',
    loadChildren: () => import('./donor-view/donor-view.module').then( m => m.DonorViewPageModule)
  },
  {
    path: 'donation-form',
    loadChildren: () => import('./donation-form/donation-form.module').then( m => m.DonationFormPageModule)
  },
  {
    path: 'address-modal',
    loadChildren: () => import('./common/modals/address-modal/address-modal.module').then( m => m.AddressModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
