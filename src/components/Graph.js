import React, { useEffect } from 'react';
import { useRef } from 'react/cjs/react.development';
import * as d3 from 'd3';

const Graph = () => {
    const svgRef = useRef();

    useEffect(() => {
        fetch('https://powerful-scrubland-85356.herokuapp.com/country_status')
            .then(res => res.json())
            .then(data => {
                console.log(data)

            //setting up svg container
                const w = 500;
                const h = 350;
                const svg = d3.select(svgRef.current)
                    .attr('width', w)
                    .attr('height', h)
                    .style('overflow', 'visible')
                    .style('margin-top', '75px');
                
            })
    },[])

    return (
        <div>
            <h3>Shows Here</h3>
            <svg ref={svgRef}></svg>
        </div>
    );
};

export default Graph;