import {useState} from 'react';

export default function Player( {initialName, symbol}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick({children}) {
        // setIsEditing(isEditing ? false : true);
        // setIsEditing(!isEditing);
        setIsEditing((editing) => !editing)
    }


    let editablePlayerName = <span className="player-name">{playerName}</span>
    // let btnCaption = 'Edit';

    if(isEditing) {
        playerName = <input type="text" required defaultValue={playerName}/>
        // btnCaption = 'Save';
    }
    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}