import React, {useRef, useState} from 'react'
import './taquin.css'
import EndGame from '../endGame/endGame'

function Taquin({currentList, orderList, endGame, setEndGame}){

    const [tour, setTour] = useState(0) 

    const grid = useRef(null)
    
    if (JSON.stringify(currentList) === JSON.stringify(orderList)){
        setEndGame(true)
    }

    function clickOnGrid(e){
    
        if(e.target.classList.contains('item')){

            let idTarget = Number(e.target.id)
         
                if (idTarget+1 >= 0 && idTarget+1 < 16 ){
                   
                    if (currentList[idTarget+1] === ''){
                   
                        let temp = currentList[idTarget+1]
                        currentList[idTarget+1] = currentList[e.target.id]
                        currentList[e.target.id] = temp
                    }
                }
                if (idTarget-1 >= 0 && idTarget-1 < 16 ){
                  
                    if (currentList[idTarget-1] === ''){
                        let temp = currentList[idTarget-1]
                        currentList[idTarget-1] = currentList[e.target.id]
                        currentList[e.target.id] = temp
                    }
                }

                if (idTarget+4 >= 0 && idTarget+4 < 16 ){
                  
                    if (currentList[idTarget+4] === ''){
                        let temp = currentList[idTarget+4]
                        currentList[idTarget+4] = currentList[e.target.id]
                        currentList[e.target.id] = temp
                    }
                }

                if (idTarget-4 >= 0 && idTarget-4 < 16 ){
                  
                    if (currentList[idTarget-4] === ''){
                        let temp = currentList[idTarget-4]
                        currentList[idTarget-4] = currentList[e.target.id]
                        currentList[e.target.id] = temp
                    }
                }
                setTour(tour + 1) 

                currentList.forEach((elem, index) => {
                    if (elem === orderList[index]){
                        let aa = document.getElementById(`${index}`)
                        aa.classList.add("greenItem");
                    }
                    else {
                        let aa = document.getElementById(`${index}`)
                        aa.classList.remove("greenItem");
                    }
                })  
            } 
        }

    if (endGame) {
        let note = 5

        currentList.forEach((elem, index) => {
            if(elem === orderList[index]){
                note ++
            }
        })

        if (note > 20) {
            note = 20
        }
        
        return (
            <EndGame note={note}/>
        )
    }

    return (
        <>      
            
            <h1 className="regleTaquin">Mettre la liste dans l'ordre croissant <br/> en déplaçant la case vide en bas a droite</h1>

            <div onClick={(e) => clickOnGrid(e)} className="grid" ref={grid} >
                {currentList.map ((item, index) =>  <div className='item' id={index} key={index} >{item}</div> )}
            </div>

            <button className="button" onClick={() => setEndGame(true) } > Arrêter le jeu et passer à la note </button>
    </>
    )

}


export default Taquin