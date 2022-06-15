import React from 'react';
import ActivityItem from './ActivityItem';
import './Activities.css';

function Activities() {
  return (
    <>
    <div className="activities">
        <div className="activities-container">
            <div className="activities-wrapper">
                <div className="activities-items">
                    <ul className="cards-items">

                    <ActivityItem src="images/img-9.jpg" text="Fishing" detail="World-class fly" description="Minutes from the famous Kenai and Kasilof Rivers, our Kenai Cabin Rentals provide the perfect home base for fishing trips. Reel in your very own trophy King Salmon." path="/products"/>

                    <ActivityItem src="images/img-1.jpg" text="Halibut" detail="Alaska" description="Cook Inlet and the Kenai Peninsula are known for some of the best Alaskan Halibut Fishing Charters. Our Soldotna cabins keep you close to the best Halibut fishing in Alaska." path="/products"/>

                    <ActivityItem src="images/img-2.jpg" text="Viewing" detail="Wildlife" description="The abundance of ildlife on the Kenai Peninsula is like no other place on earth. Experience what it's like to see Brown and Black Bears in their natural environment." path="/products"/>

                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Activities;