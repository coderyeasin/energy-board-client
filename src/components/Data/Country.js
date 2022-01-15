import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Country = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch("https://powerful-scrubland-85356.herokuapp.com/country_status")
      .then((res) => res.json())
      .then((data) => {
        const country = data.filter((e) => e.country);
        console.log(country);
        setCountry(country);
      });
  }, []);

  const locally = country.slice(0, 10);

  return (
    <div>
      <h3>
        Total Country found: {country.length}, here are shows only 10 Items
      </h3>

      {locally.map((e) => (
        <Table responsive striped bordered hover key={e.id}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Topic</th>
              <th>Added</th>
              <th>Country</th>
              <th>Start Year</th>
              <th>Impact</th>
              <th>Insight</th>
              <th>Intensity</th>
              <th>Likelihood</th>
              <th>Pestle</th>
              <th>Published</th>
              <th>Region</th>
              <th>Relevance</th>
              <th>Sector</th>
              <th>Source</th>
              <th>Url</th>
              <th>end_Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{e?.title}</td>
              <td>{e?.topic}</td>
              <td>{e?.added}</td>
              <td>{e?.country}</td>
              <td>{e?.start_year}</td>
              <td>{e?.impact}</td>
              <td>{e?.insight}</td>
              <td>{e?.intensity}</td>

              <td>{e?.likelihood}</td>
              <td>{e?.pestle}</td>
              <td>{e?.published}</td>
              <td>{e?.country}</td>
              <td>{e?.region}</td>
              <td>{e?.relevance}</td>
              <td>{e?.sector}</td>
              <td>{e?.source}</td>
              <td>{e?.url}</td>
              <td>{e?.end_year}</td>
            </tr>
          </tbody>
        </Table>
      ))}
    </div>
  );
};

export default Country;
