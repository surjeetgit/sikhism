import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SurtestService } from './surtest.service';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { HttpclientdemoComponent } from './httpclientdemo/httpclientdemo.component';
import { HttpClientModule } from '@angular/common/http';
import { MobiledetailsComponent } from './mobiledetails/mobiledetails.component';
import { MobiledataserviceService } from './mobiledataservice.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentdetailsComponent,
    HttpclientdemoComponent,
    MobiledetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SurtestService, MobiledataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
