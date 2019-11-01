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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nulla fringilla id felis nec congue. Donec euismod, 
            dolor ac lacinia imperdiet, sem nunc ullamcorper quam, 
            sit amet interdum ante augue quis nulla. Nullam laoreet in odio in dictum. 
            Vivamus auctor malesuada risus in mollis. Aliquam feugiat, dui nec imperdiet maximus, 
            justo nunc congue metus, non pulvinar mauris enim eu diam. 
            Fusce laoreet fermentum arcu malesuada ultrices. 
            Nulla consequat aliquet nisl quis tristique. Fusce eleifend sapien nec arcu convallis, 
            ut cursus est lacinia. Ut sagittis, justo non aliquam accumsan, ipsum quam varius magna, 
            id auctor odio mi ac odio.
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
