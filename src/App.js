import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Home/Header";
import Home from "./components/Home/Home";
import Static from "./components/Static/Static";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/home" element={<Home />} />
            <Route path="/static" element={<Static />} />
          </Route>
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
