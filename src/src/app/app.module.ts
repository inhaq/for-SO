import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SellIphoneComponent } from './sell-iphone/sell-iphone.component';
import { SellService } from './shared/sell.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,
    HttpModule ],
  declarations: [ AppComponent, HelloComponent, SellIphoneComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SellService]
})
export class AppModule { }
