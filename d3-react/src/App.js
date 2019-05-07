import React, { Component } from 'react';
import * as d3 from "d3";
/*
const data = [
	{
		"country": "Afghanistan",
		"population": "31889923",
		"lifeexpectancy": "43.8",
		"purchasingpower": "974.58"
	},
	{
		"country": "Albania",
		"population": "3600523",
		"lifeexpectancy": "76.4",
		"purchasingpower": "5937.03"
	},
	{
		"country": "Algeria",
		"population": "33333216",
		"lifeexpectancy": "72.3",
		"purchasingpower": "6223.37"
	},
	{
		"country": "Angola",
		"population": "12420476",
		"lifeexpectancy": "42.7",
		"purchasingpower": "4797.23"
	},
	{
		"country": "Argentina",
		"population": "40301927",
		"lifeexpectancy": "75.3",
		"purchasingpower": "12779.38"
	},
	{
		"country": "Australia",
		"population": "204341763",
		"lifeexpectancy": "81.2",
		"purchasingpower": "34435.37"
	}
];
*/
const x = d3.scaleLinear()
    .domain([0, 35000])
    .range([0, 800]);

const y = d3.scaleLinear()
    .domain([100, 0])
    .range([0, 500]);

class App extends Component {

    handleMouseOut(d, i) {
        // Use D3 to select element, change color back to normal
        d3.select(this)
            .attr("fill", "#ffaaccaa");
        // Select text by id and then remove
        d3.select("#t" + d.x + "-" + d.y + "-" + i).remove();  // Remove text location
      }

    handleMouseOver(d, i) {  // Add interactivity
        // Use D3 to select element, change color and size
        
        let parent = d3.select(this.parentNode);

        d3.select(this)
            .attr("fill", "orange");
        
        parent.append("text")
            .attr("id", "t" + d.x + "-" + d.y + "-" + i)
            .attr("x", d => x(d.purchasingpower) - 10)
            .attr("y", d => y(d.lifeexpectancy))
            .text(d=>d.country);

        // Specify where to put label of text
        /*
        let svg = d3.select("svg");
        console.log(svg);
        svg.append("text").attr({
           
            x: function() { return 100; },
            y: function() { return 100; }
        })
        .text(function() {
          return [d.x, d.y];  // Value of the text
        });*/
      }

    componentDidMount(){

        fetch("https://gist.githubusercontent.com/josejbocanegra/000e838b77c6ec8e5d5792229c1cdbd0/raw/83cd9161e28e308ef8c5363e217bad2b6166f21a/countries.json")
        .then(res => {
            return res.json();
        }).then(data => {
            this.renderData(data);
        });   
    }

    renderData(data){

        let svg = d3.select("svg");

        let main = svg.append("g")
            .attr("transform", "translate(50,50)");

        let g = svg.selectAll("g").data(data);

        var elemEnter = g.enter()
            .append("g");

        elemEnter.append("circle")
            .attr("cx", d => x(d.purchasingpower))
            .attr("cy", d => y(d.lifeexpectancy))
            .attr("r", 25)
            .on("mouseover", this.handleMouseOver)
            .on("mouseout", this.handleMouseOut)
            .attr("fill", "#ffaaccaa");

        main.append("g")
            .classed("x--axis", true)
            .call(d3.axisBottom(x))
            .attr("transform", "translate(0, 500)");

        main.append("g")
        .classed("y--axis", true)
        .call(d3.axisLeft(y));
    }
    render() {
        return (
            <div>
                <svg width="800" height="600"></svg> 
            </div>
        );
    }
}

export default App;