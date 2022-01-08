import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [energy, setEnergy] = useState([])
  
  useEffect(() => {
    fetch('https://powerful-scrubland-85356.herokuapp.com/country_status')
      .then(res => res.json())
      .then(data => console.log(data))
  },[])

  return (
    <div className="App">
      <h3>Data  Visualization</h3>
    </div>
  );
}

export default App;
