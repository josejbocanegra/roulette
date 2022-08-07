const canvas = d3.select("#canvas");

const data = [
    {name: "Juan", age: 13},
    {name: "Jose", age: 30},
    {name: "Majo", age: 23},
    {name: "Sandra", age: 13},
    {name: "Juan1", age: 3},
    {name: "Jose1", age: 30},
    {name: "Majo1", age: 23},
    {name: "Sandra1", age: 13}
];

const width = 700;
const height = 500;
const margin = { top:10, left:50, bottom: 40, right: 10};
const iwidth = width - margin.left - margin.right;
const iheight = height - margin.top -margin.bottom;

const svg = canvas.append("svg");
svg.attr("width", width);
svg.attr("height", height);

let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

const y = d3.scaleLinear() 
    .domain([0, 30])
    .range([iheight, 0]);

const x = d3.scaleBand()
.domain(data.map(d => d.name) ) 
.range([0, iwidth])
.padding(0.1); 

const bars = g.selectAll("rect").data(data);

bars.enter().append("rect")
.attr("class", "bar")
.style("fill", "steelblue")
.attr("x", d => x(d.name))
.attr("y", d => y(d.age))
.attr("height", d => iheight - y(d.age))
.attr("width", x.bandwidth())  

g.append("g")
.classed("x--axis", true)
.call(d3.axisBottom(x))
.attr("transform", `translate(0, ${iheight})`);  

g.append("g")
.classed("y--axis", true)
.call(d3.axisLeft(y));

/*
canvas.append("ul");

//data.forEach(d => canvas.append("li").text(d.name));

const li = canvas.selectAll("li").data(data);

li.enter()
    .append("li")
    .text(d => d.name);

/*
canvas.append("ul")
.append("li")
.text("Hola mubnd");

console.log(canvas);
*/