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

                    <CardItem src="images/img-9.jpg" text="Explore the hidden waterfall deep inside the Amazon Jungle" label="Adventure" path="/services"/>

                    <CardItem src="images/img-8.jpg" text="Travel through the island of Bali in a Private Cruise" label="Luxury" path="/services"/>

                </ul>

                <ul className="cards-items">

                    <CardItem src="images/img-5.jpg" text="Travel Preparations are Underway: More Fun Awaits in the Philippines" label="Leisure" path="/services"/>

                    <CardItem src="images/img-6.jpg" text="Fun and unique adventures in the Philippines that you can experience in a day" label="Adventure" path="/services"/>

                    <CardItem src="images/img-7.jpg" text="5 Luxury Caribbean Hotels With Beautiful Pools" label="Luxury" path="/services"/>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards