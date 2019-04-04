import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SourceListComponent } from "./source-list/source-list.component";
import { SourceDetailComponent } from "./source-detail/source-detail.component";
import { RouterModule} from "@angular/router";

@NgModule({
  declarations: [SourceListComponent, SourceDetailComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [SourceListComponent]
})
export class SourceModule { }
