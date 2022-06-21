import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeDirective } from './Directive/attribute.directive';
import { StructuralDirective } from './Directive/structural.directive';
import { StructComponent } from './struct/struct.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirective,
    StructuralDirective,
    StructComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
