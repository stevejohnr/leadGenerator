import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';

import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PainterComponent } from './painter/painter.component';
import { TyresComponent } from './tyres/tyres.component';
import { ResponseComponent } from './response/response.component';

const routes: Routes = [
  {path: 'painter', component: PainterComponent},
  {path: 'tyres', component: TyresComponent},
  {path: 'response', component: ResponseComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TyresComponent,
    ResponseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatRadioModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
