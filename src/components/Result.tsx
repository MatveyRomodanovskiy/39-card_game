import React from 'react';
import {game} from "../utils/constants";
import {Score} from "../utils/types";
interface Props {
    changePage: (page: string) => void,
    score: Score,

}
const Result = ({changePage, score}: Props) => {
    return (
        <div>
            <h1>{score.message}</h1>
            <h2>{score.player} - {score.comp}</h2>
            <button onClick={() => changePage(game)}>Again?</button>
        </div>
    );
};

export default Result;