import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Country from "../Data/Country";
import Intensity from "../Data/Intensity";
import Likelihood from "../Data/Likelihood";
import Region from "../Data/Region";
import Relevance from "../Data/Relevance";
import Topics from "../Data/Topics";
import Year from "../Data/Year";

// Intensity
// Likelihood
// Relevance
// Year
// Country
// Topics
// Region
// City

const Static = () => {
  return (
    <div className="mx-5">
      <h3 className="mt-3">Statically Visualized</h3>
      <Tabs
        defaultActiveKey="intensity"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="intensity" title="Intensity">
          <Intensity />
        </Tab>
        <Tab eventKey="likelihood" title="Likelihood">
          <Likelihood />
        </Tab>
        <Tab eventKey="relevance" title="Relevance">
          <Relevance />
        </Tab>
        <Tab eventKey="year" title="Year">
          <Year />
        </Tab>

        <Tab eventKey="country" title="Country">
          <Country />
        </Tab>
        <Tab eventKey="topics" title="Topics">
          <Topics />
        </Tab>
        <Tab eventKey="region" title="Region">
          <Region />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Static;
