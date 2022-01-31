import { Component } from "react";
//import './app.css';
//COMPONENTS
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import CartWidget from "./CardComponents/CartWidget";
import Contador from "./components/Contador/Contador"

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header title="Crypto World"/>
        <CartWidget />
        <Contador />
      </div>
    );
  };
};


export default App;
