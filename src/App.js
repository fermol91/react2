import { Component } from "react";
//import './app.css';
//COMPONENTS
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import CartWidget from "./CardComponents/CartWidget";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header title="Crypto World"/>
        <CartWidget />
      </div>
    );
  };
};

/*const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
    </div>
  );
};
*/ 
export default App;
