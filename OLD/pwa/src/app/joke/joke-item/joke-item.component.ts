import { Component, OnInit } from '@angular/core';

import { JokeService } from "../joke.service";

@Component({
  selector: 'app-joke-item',
  templateUrl: './joke-item.component.html',
  styleUrls: ['./joke-item.component.css']
})
export class JokeItemComponent implements OnInit {

  constructor(private jokeService: JokeService) { }

  joke: any;

  getJoke(){
  	this.jokeService.getJoke().subscribe(res=>{
  		this.joke = res;
  		console.log(res);
  	});
  }

  ngOnInit() {
  	this.getJoke();
  }

}
