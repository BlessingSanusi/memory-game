import React from 'react';
import "../card.css";

function Cards(props)  {
        return (
            
            <div className="card" value={props.id} onClick={() => props.handleClick(props.id)}>
                <div className="img-container">
                <img src={props.image} alt={props.id}/>
                </div>
                </div>
        
           
        )
    }


export default Cards;