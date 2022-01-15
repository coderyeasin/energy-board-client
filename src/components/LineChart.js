import React from 'react';
import { useEffect, useState, useRef } from 'react';

const LineChart = () => {
    const [energy, setEnergy] = useState([])
  
    const svgRef = useRef();
//----------Important
// Intensity
// Likelihood
// Relevance
// Year
// Country
// Topics
// Region
// City 
    
//Total value---
    
// added: "January, 18 2017 02:23:13"
// country: ""
// end_year: 2027
// impact: 3
// insight: "E-Boats, Anyone? Electric Boat Market To Reach $20 Billion By 2027, According To New Study"
// intensity: 60
// likelihood: 4
// pestle: "Political"
// published: "January, 13 2017 00:00:00"
// region: ""
// relevance: 5
// sector: "Government"
// source: "CleanTechnica"
// start_year: ""
// title: "The market for non-military electric watercraft and marine motors will balloon to over $20 billion worldwide by 2027."
// topic
    //url


    useEffect(() => {
      fetch('https://powerful-scrubland-85356.herokuapp.com/country_status')
        .then(res => res.json())
          .then(data => {
              console.log(data)

              const intensity = data.filter(e => e.intensity)
              console.log(intensity);

              const likelihood = data.filter(e => e.likelihood)
              console.log(likelihood);

              const relevance = data.filter(e => e.relevance)
              console.log(relevance);

            //   const year = data.filter(e => e.year)
            //   console.log(year);

              const country = data.filter(e => e.country)
              console.log(country);

              const topic = data.filter(e => e.topic)
              console.log(topic);

              const region = data.filter(e => e.region)
              console.log(region);

            //   const city = data.filter(e => e.city)
            //   console.log(city);
        })
    }, [])
    
    return (
        <div>
             <h3>Data  Visualization</h3>
            <svg ref={svgRef}>Data</svg>
        </div>
    );
};

export default LineChart;