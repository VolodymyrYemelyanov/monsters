import React from 'react';

import Card from '../card/card.component.jsx';

import './card-list.component.css';

const CardList = (props) => {
	return (
		<div className="card-list">{ props.children }
			{
            props.monsters.map(monster => (
              <Card key={monster.id} monster={monster} />
          ))}
		</div>
		);
}

export default CardList;