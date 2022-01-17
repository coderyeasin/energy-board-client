import React, { useEffect, useState } from "react";
import { useRef } from "react/cjs/react.development";
import * as d3 from "d3";
import { max, svg } from "d3";
import "./Graph.css";

/////////////////////------ Graph sothik vabe kaj na korle ui asbe na

const Graph = () => {
  const [intensity, setIntensity] = useState([]);
  const svgRef = useRef();

  useEffect(() => {
    fetch("https://powerful-scrubland-85356.herokuapp.com/country_status")
      .then((res) => res.json())
      .then((data) => {
        setIntensity(data);
        console.log(data);

        const intensity = data.filter((e) => e.intensity);
        // const intensity = data.filter(
        //   (e) =>
        //     e.intensity &&
        //     e.likelihood &&
        //     e.relevance &&
        //     e.start_year &&
        //     e.country &&
        //     e.topics &&
        //     e.region &&
        //     e.end_year
        // );
        console.log(intensity);
        const likelihood = data.filter((e) => e.likelihood);
        console.log(likelihood);

        //Start D3
        const margin = { top: 50, right: 30, bottom: 30, left: 30 };
        const width =
          parseInt(d3.select("#graph").style("width")) -
          margin.left -
          margin.right;
        const height =
          parseInt(d3.select("#graph").style("height")) -
          margin.top -
          margin.bottom;

        //setup chart
        const svg = d3
          .select(svgRef.current)
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .style("background-color", "crimson")
          .append("g")
          .attr(
            "transform",
            "translate(" + margin.left + "," + margin.top + ")"
          );

        //setup scale
        const x = d3
          .scaleLinear()
          .domain("transform", "translate(0," + height + ")")
          .range([0, width]);

        svg
          .append("g")
          .attr("transform", "translate(0, " + height + ")")
          .call(d3.axisBottom(x));

        const y = d3.scaleLinear().domain([0, max]).range([height, 0]);

        svg.append("g").call(d3.axisLeft(y));

        svg
          .append("path")
          .attr("fill", "none")
          .attr("stroke", "yellow")
          .attr("storke-width", 3)
          .attr(
            "d",
            d3
              .line()
              .x(function (d) {
                return x(d.intensity);
              })
              .y(function (d) {
                return y(d.likelihood);
              })
          );

        svg
          .append("text")
          .attr("x", width / 2)
          .attr("y", margin.top / 2)
          .attr("text-anchor", "middle")
          .attr("font-size", "16px")
          .attr("stoke", "black")
          .attr("Gas Petro");
      });
  }, []);

  return (
    <div id="graph">
      <h3 className="my-3">Shows Here</h3>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default Graph;
