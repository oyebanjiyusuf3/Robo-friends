import React from 'react'


function Card(props) {
      
    return (
        <div className="border container containers">
            <img src={`https://robohash.org/${props.robots.id}`}alt="robot" className="w-16 md:w-32 lg:w-48 displayflex"/>
            <div>
                <h3>{props.robots.name}</h3>
                <p>{props.robots.email}</p>
                <p>{props.robots.username}</p>
            </div>
            
        </div>
    )
}


export default Card

