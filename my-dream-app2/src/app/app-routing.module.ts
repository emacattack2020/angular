import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddressComponent } from './address/address.component';

const appRoutes: Routes = [
  { path: '', component: UserComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'address', component: AddressComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
