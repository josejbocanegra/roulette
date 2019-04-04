import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

import { SourceService} from "../source.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-source-detail",
  templateUrl: "./source-detail.component.html",
  styleUrls: ["./source-detail.component.css"]
})
export class SourceDetailComponent implements OnInit {

  constructor(
  	private route: ActivatedRoute, private service: SourceService) { }

  detail: any = {};

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
    	this.service.getDetails(routeParams.id).subscribe(cls => {
    		console.log(cls);
    		this.detail = cls;
    	});
    });
  }
}
