import React, {useState} from 'react';
import {game} from "../utils/constants";
interface Props {
    changePage: (page: string) => void,

    changeName: (name: string) => void
}
const Start = ({changePage, changeName}: Props) => {
    const [name, setName] = useState('');
    const handleClickStart = () => {
        changeName(name);
        changePage(game);
    }
    return (
        <div>
            <h1>Ready For War</h1>
            <input
                type={'text'}
                placeholder={'Enter your name'}
                value={name}
                onChange={e => setName(e.target.value.toUpperCase())}
            />
            <button onClick={handleClickStart}>Start</button>
        </div>
    );
};

export default Start;