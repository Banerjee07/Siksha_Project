import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
// import { SecondPageComponent } from './second-page/second-page.component';
import { PremiumPageComponent } from './premium-page/premium-page.component';
import { BasicPageComponent } from './basic-page/basic-page.component';
import { AppRoutingModule } from './app-routing.module';
// import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    // SecondPageComponent,
    PremiumPageComponent,
    BasicPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // Ng2SmartTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
