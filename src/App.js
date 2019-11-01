import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./Components/Nav";
import Feet from "./Components/Feet";
import Home from "./Components/Home";
import History from "./Components/History";

function App() {
  return (
    <view style={{ fles: 1 }}>
      <Nav />
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <Home />
            <History />
          </div>
        </div>
      </div>
      <Feet />
    </view>
  );
}

export default App;
