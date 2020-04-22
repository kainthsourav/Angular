import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import{FlexLayoutModule} from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import 'hammerjs';
import { MenuComponent } from './menu/menu.component'
import { importExpr } from '@angular/compiler/src/output/output_ast';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {AppRoutingModule} from "../app/app-routing/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
