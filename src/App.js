import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { getProductsByCategory } from "./service/shopService";

function App() {
  //
  const [fashions, setFashions] = useState([]);
  const [jewelrys, setJewelrys] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fashionResponse = await getProductsByCategory(`men's clothing`, 4);
      const jewelryResponse = await getProductsByCategory(`jewelery`, 4);

      setFashions(fashionResponse);
      setJewelrys(jewelryResponse);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    console.log("fashions", fashions);
    console.log("jewelrys", jewelrys);
  }, [fashions, jewelrys]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
