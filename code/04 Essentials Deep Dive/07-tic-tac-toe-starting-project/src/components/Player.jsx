import {useState } from 'react';

export default function Player({initialName, symbol, isActive}){

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] =  useState(false);

    function handleEditClick() {
        // DO NOT change state like this:
        // setIsEditing(!isEditing)

        // instead always PASS A FUNCTION
        // setIsEditing((editing)=>{!editing});
        setIsEditing((editing)=>!editing);

    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? 'active'  : undefined}>
            <span className="player">
                { isEditing ?
                    <input type="text" required value={playerName} onChange={handleChange}></input>:
                    <span className="player-name">{playerName}</span>
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => handleEditClick()}>{isEditing? 'Save' : 'Edit'}</button>
      </li>

    );
}