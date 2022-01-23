import react from "react";
import logo from "./logo.svg";
import "./App.css";

// import { Container, Box, Typography } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreationCv from "./views/CreationCv";

function App() {
  const renderCreationCv = () => {
    <container>
      <div>
        <CreationCv />
      </div>
    </container>;
  };
  console.log("Helloo");

  return (
    <div className="App">
      <div> Stroumpf</div>
      <Router>
        <Routes>
          <Route path="/CreationCv" element={<CreationCv/>}  >  </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
