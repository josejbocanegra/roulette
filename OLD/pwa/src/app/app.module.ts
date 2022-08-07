import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JokeModule} from "./joke/joke.module";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, JokeModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
