import {Deck} from "./types";

export const start = 'start';
export const game = 'game';
export const result = 'result';

export const createDeck = () => {
    const res: Array<Deck> = [];
    const suits = ['club', 'diamond', 'heart', 'spade'];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 1; j <= 13; j++) {
            res.push({rank: j, suit: suits[i]});
        }
    }
    return res;
}
