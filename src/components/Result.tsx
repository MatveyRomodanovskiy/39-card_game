import React from 'react';
import {game} from "../utils/constants";
import {Score} from "../utils/types";
interface Props {
    changePage: (page: string) => void,
    globalScore: Score,

}
const Result = ({changePage, globalScore}: Props) => {
    return (
        <div>
            <h1>{globalScore.message}</h1>
            <h2>Global score: {globalScore.player} - {globalScore.comp}</h2>
            <button onClick={() => changePage(game)}>Again?</button>
        </div>
    );
};

export default Result;