import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustAttrDirComponent } from './AtrributeDirective/cust-attr-dir/cust-attr-dir.component';

@NgModule({
  declarations: [
    AppComponent,
    CustAttrDirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
