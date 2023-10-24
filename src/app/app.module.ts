import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustAttrDirComponent } from './AtrributeDirective/cust-attr-dir/cust-attr-dir.component';
import { AttributeDirective } from './customAttDirective/attrDir.directive';
import { HightlightDirectiveDirective } from './customAttDirective/hightlight-directive.directive';
import { HoverdirectiveDirective } from './customAttDirective/hoverdirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustAttrDirComponent,
    AttributeDirective,
    HightlightDirectiveDirective,
    HoverdirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
