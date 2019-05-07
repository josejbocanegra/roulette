import React, { Component } from 'react';
import * as d3 from "d3";

const x = d3.scaleLinear()
    .domain([0, 50000])
    .range([0, 800]);

const y = d3.scaleLinear()
    .domain([100, 0])
    .range([0, 500]);

class App extends Component {

    handleMouseOut(d, i) {

        d3.select(this)
            .attr("fill", "#ffaaccaa");

        d3.select("#t" + d.x + "-" + d.y + "-" + i).remove();  // Remove text location
      }

    handleMouseOver(d, i) {  
                
        let parent = d3.select(this.parentNode);

        d3.select(this)
            .attr("fill", "orange");
        
        parent.append("text")
            .attr("id", "t" + d.x + "-" + d.y + "-" + i)
            .attr("x", d => x(d.purchasingPower) - 10)
            .attr("y", d => y(d.lifeExpectancy))
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

        fetch("https://gist.githubusercontent.com/josejbocanegra/4c553e3b5f1aae1f05ea67068f058087/raw/9f1ec3f2b48cf59ed3c3c4b01d15d1a23b25f57c/countriesall.json")
        .then(res => res.json())
        .then(data => {
            this.renderData(data);
        });   
    }

    renderData(data){

        let svg = d3.select("svg");

        let main = svg.append("g")
            .attr("transform", "translate(50,50)");

        let g = main.selectAll("g").data(data);

        var elemEnter = g.enter()
            .append("g");

        elemEnter.append("circle")
            .attr("cx", d => x(d.purchasingPower))
            .attr("cy", d => y(d.lifeExpectancy))
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