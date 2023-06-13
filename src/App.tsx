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

  const changeScore = (comp: string, player: string) => {
    const res = {...globalScore, message: 'Draw'}
    if(comp > player){
      res.comp++
      res.message = 'Lose'
    }
    if(comp < player){
      res.player++
      res.message = 'Win'
    }
    setGlobalScore(res);
  }

  switch (page) {
    case game:
      return <Game name={name} changePage={setPage} changeScore={changeScore}/>;
    case result:
      return <Result score={globalScore} changePage={setPage}/>;
    default:
      return <Start changeName={changeName} changePage={setPage}/>;
  }
}

export default App;