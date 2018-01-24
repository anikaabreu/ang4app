import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DataService } from './services/data.service' ;

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [ //modules go into imports
    BrowserModule
    FormsModule
    HttpModule
  ],
  providers: [DataService], //services are providers
  bootstrap: [AppComponent]
})
export class AppModule { }
