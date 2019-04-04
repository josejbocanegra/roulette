import { Component, OnInit } from "@angular/core";

import { SourceService } from "../source.service";

@Component({
  selector: "app-source-list",
  templateUrl: "./source-list.component.html",
  styleUrls: ["./source-list.component.css"]
})
export class SourceListComponent implements OnInit {

  constructor(private sourceService: SourceService) { }

  sources: any[];

  getSources() {
   this.sourceService.getSources().subscribe( data => {
    this.sources = data.sources.slice(0, 9);
   });
  }

  ngOnInit() {
  	this.getSources();
  }
}
