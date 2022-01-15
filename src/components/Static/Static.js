import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Intensity from "../Data/Intensity";
import Likelihood from "../Data/Likelihood";
import Relevance from "../Data/Relevance";

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
      <h3>Statically Visualized</h3>
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
      </Tabs>
    </div>
  );
};

export default Static;
