import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationBasicComponent } from './information-basic/information-basic.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DegreeInformationComponent } from './degree-information/degree-information.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationBasicComponent,
    WorkExperienceComponent,
    DegreeInformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
