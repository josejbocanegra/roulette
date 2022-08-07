import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeItemComponent } from './joke-item/joke-item.component';

@NgModule({
  declarations: [JokeItemComponent],
  imports: [
    CommonModule
  ],
  exports: [JokeItemComponent]
})
export class JokeModule { }
