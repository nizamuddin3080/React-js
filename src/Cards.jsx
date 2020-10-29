import React from 'react';


function Card(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="myImg"/>
                    <div className="card__info">
                        <span className="card__category"> {props.sname} </span>
                        <h3 className="class__title">{props.title}</h3>
                        <a href={props.link}>
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default Card;
