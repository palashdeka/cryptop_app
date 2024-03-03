import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./components/Coin";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    Axios.get("https://www.coingecko.com/en/api").then(
      (response) => {
        setListOfCoins(response.data.coins);
      }
    );
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="App">
      <div className="header">
        <input
          type="text"
          placeholder="search"
          onChange={(event) => {
            setSearchWord(event.target.value);
          }}
        />
      </div>
      <div className="display">
        {filteredCoins.map((coin) => {
          return (
            <ul>
            <Coin
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
            />
            </ul>
          );
        })}
        
      </div>
    </div>
  );
}

export default App;