import React, {useEffect, useRef, useState} from 'react';
import {createDeck, result} from "../utils/constants";
import {Deck} from "../utils/types";
interface Props {
    changePage: (page: string) => void,
    name: string,
    changeScore: (comp: string, player: string ) => void
}


const Game = ({changePage, name, changeScore}: Props) => {
    const compDeck = useRef<Array<Deck>>([]);
    const playerDeck = useRef<Array<Deck>>([]);
    const [compCard, setCompCard] = useState('Computer card');
    const [playerCard, setPlayerCard] = useState('Player card');
    const [playerWin, setPlayerWin] = useState(0);
    const [compWin, setCompWin] = useState(0);

    useEffect(() => {
        const deck = createDeck();
        deck.sort((a,b) => Math.random() - 0.5);
        compDeck.current  = deck.slice(0, deck.length / 2);
        playerDeck.current = deck.slice(deck.length / 2, deck.length);
    }, [])
    const handleClickNext = () => {
        if (compDeck.current.length) {
            const comp = compDeck.current.pop();
            const player = playerDeck.current.pop();
            if (player!.rank > comp!.rank) {
                setPlayerWin(prevPlayerWin => prevPlayerWin + 1);
            }
            if (player!.rank < comp!.rank) {
                setCompWin(prevCompWin => prevCompWin + 1);
            }
            setCompCard(`${comp!.rank} ${comp!.suit}`);
            setPlayerCard(`${player!.rank} ${player!.suit}`);
        } else {
            changeScore(compWin + '', playerWin + '');
            changePage(result);
        }
    }
    return (
        <div>
            <h2>Computer ({compWin})</h2>
            <p>{compCard}</p>
            <p>{playerCard}</p>
            <h2>{name} ({playerWin})</h2>
            <button onClick={handleClickNext}>Next</button>
        </div>
    );
};

export default Game;