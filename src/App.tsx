import './App.css';
import Start from "./components/Start";
import Game from "./components/Game";
import Result from "./components/Result";
import {useState} from "react";
import {game, result, start} from "./utils/constants";
import {Score} from "./utils/types";

function App() {
  const [page, setPage] = useState(start);
  const [name, setName] = useState('YOU');
  const [globalScore, setGlobalScore] = useState<Score>({comp: 0, player: 0, message: ''})

  const changeName = (name = '') => {
    name = name.trim();
    if (name) {
      setName(name);
    }
  }



  switch (page) {
    case game:
      return <Game name={name} changePage={setPage} globalScore={globalScore} changeScore={setGlobalScore}/>;
    case result:
      return <Result globalScore={globalScore} changePage={setPage}/>;
    default:
      return <Start changeName={changeName} changePage={setPage}/>;
  }
}

export default App;