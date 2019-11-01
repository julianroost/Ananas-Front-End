import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./Components/Nav";
import Feet from "./Components/Feet";
import History from "./Components/History";

function App() {
  return (
    <view style={{ fles: 1 }}>
      <Nav />
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>Hello, I'm from the Main Page!</h1>
            <p>
              Aliquip aliquip ullamco deserunt quis nostrud ea amet mollit nisi.
              Enim nisi sint culpa amet aute Lorem id cillum dolor excepteur
              aliqua aliquip exercitation. Et elit culpa id est veniam ad.
            </p>
            <History />
          </div>
        </div>
      </div>
      <Feet />
    </view>
  );
}

export default App;
