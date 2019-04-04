import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes} from "@angular/router";


import { AppComponent } from "./app.component";
import { SourceModule } from "./source/source.module";
import { SourceDetailComponent } from "./source/source-detail/source-detail.component";

const appRoutes: Routes = [
  { path: "source/:id", component: SourceDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SourceModule, HttpClientModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
