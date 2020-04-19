import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ResultComponent } from './result.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatSliderModule, MatTabsModule, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatDividerModule ],
  declarations: [ AppComponent, ResultComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
