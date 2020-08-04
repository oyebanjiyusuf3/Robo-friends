import React from 'react'
import Card from './Card'

const CardList = (props) => {
  const cardComponents = props.robots.map((rob) => (
    <Card key={rob.id} robots={rob} />
  ));
  return (
    <div className="displayflex text-center">
      {cardComponents}
    </div>
  )
}

export default CardList
