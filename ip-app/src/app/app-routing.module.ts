import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from './basic-page/basic-page.component';
import { PremiumPageComponent } from './premium-page/premium-page.component';
import { FirstPageComponent } from './first-page/first-page.component';

const routes: Routes = [
  { path: 'first', component: FirstPageComponent},
  { path: 'basic', component: BasicPageComponent},
  { path: 'premium', component: PremiumPageComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
