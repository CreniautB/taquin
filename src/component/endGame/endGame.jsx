import React from 'react'


function EndGame ({note}) {


    return (
        <> 
            <h1 className="endGame">Bravo vous venez de finir le jeu <br/> Vous avez obtenu {note} / 20</h1>
        </>
    )
}

export default EndGame