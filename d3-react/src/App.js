import React, { Component } from 'react';
import * as d3 from "d3";

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

const x = d3.scaleLinear()
    .domain([0, 35000])
    .range([0, 800]);

const y = d3.scaleLinear()
    .domain([100, 0])
    .range([0, 500]);

class App extends Component {

    componentDidMount(){

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
            .attr("fill", "#ffaaccaa");

        elemEnter.append("text")
            .attr("dx", d => x(d.purchasingpower))
            .attr("dy", d => y(d.lifeexpectancy))
            .text(d => d.country);

        main.append("g")
            .classed("x--axis", true)
            .call(d3.axisBottom(x))
            .attr("transform", "translate(0, 500)");

            main.append("g")
            .classed("y--axis", true)
            .call(d3.axisLeft(y));

        /*svg.append("circle")
            .attr("cx", 100)
            .attr("cy", 100)
            .attr("r", 100)
            .attr("fill", "#ffaaccaa");
        svg.append("circle")
            .attr("cx", 140)
            .attr("cy", 100)
            .attr("r", 100)
            .attr("fill", "#ffaaccaa");*/
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