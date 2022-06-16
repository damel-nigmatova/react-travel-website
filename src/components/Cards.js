import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards-container">
            <div className="cards-wrapper">
                <ul className="cards-items">

                    <CardItem src="images/img-9.jpg" text="Explore the hidden waterfall deep inside the Amazon Jungle" label="Adventure" path="/contacts" location="Brazil" activity="Culture & Tradition"/>

                    <CardItem src="images/img-3.jpg" text="Travel through the island of Bali in a Private Cruise" label="Luxury" path="/contacts" location="Bali" activity="Outdoor & Adventure"/>

                </ul>

                <ul className="cards-items">

                    <CardItem src="images/img-5.jpg" text="Travel Preparations are Underway: More Fun Awaits in the Philippines" label="Leisure" path="/contacts" location="Philippines" activity="Arts & Crafts"/>

                    <CardItem src="images/img-6.jpg" text="Fun and unique adventures in the Philippines" label="Adventure" path="/contacts" location="Philippines" activity="Outdoor & Adventure" />

                    <CardItem src="images/img-7.jpg" text="5 Luxury Caribbean Hotels With Beautiful Pools" label="Luxury" path="/contacts" location="Caribbean Islands" activity="Culture & Tradition" />

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;