import React, {useEffect, useRef, useState} from 'react';
import {createDeck, result} from "../utils/constants";
import {Deck, Score} from "../utils/types";
import {sattoloRandomSorting} from "../utils/sattoloRandomSorting";
interface Props {
    changePage: (page: string) => void,
    name: string,
    globalScore: Score,
    changeScore: (globalScore: Score) => void
}


const Game = ({changePage, name, globalScore, changeScore}: Props) => {
    const compDeck = useRef<Array<Deck>>([]);
    const playerDeck = useRef<Array<Deck>>([]);
    const [compCard, setCompCard] = useState('Computer card');
    const [playerCard, setPlayerCard] = useState('Player card');
    const [playerWin, setPlayerWin] = useState(0);
    const [compWin, setCompWin] = useState(0);

    useEffect(() => {
        const deck = createDeck();
    //    deck.sort((a,b) => Math.random() - 0.5);
        sattoloRandomSorting(deck);
        compDeck.current  = deck.slice(0, deck.length / 2);
        playerDeck.current = deck.slice(deck.length / 2, deck.length);
        oneTurn();
    }, [])
    const oneTurn = () => {
        if (compDeck.current.length) {
            const comp = compDeck.current.pop();
            const player = playerDeck.current.pop();
            setCompCard(`${comp!.rank} ${comp!.suit}`);
            setPlayerCard(`${player!.rank} ${player!.suit}`)
            const winner = comp!.rank - player!.rank;
            if (winner) {
                if (winner > 0) {
                    setCompWin(compWin + 1);
                } else {
                    setPlayerWin(playerWin + 1);
                }
            }
        }
    }
        const handleClickNext = () => {
            if(compDeck.current.length){
                oneTurn();
            } else {
                const newScore: Score = {...globalScore};
                if (compWin - playerWin){
                    if((compWin - playerWin) >0){
                        newScore.message = 'Comp is winner! ' + compWin + ' : ' + playerWin +'';
                        newScore.comp++;

                    } else {
                        newScore.message =  `${name} is winner!`+ '\nGame score' + compWin + ' : ' + playerWin +'';
                        newScore.player++;
                    }
                } else {newScore.message = "DRAWN"}
                changeScore(newScore);
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