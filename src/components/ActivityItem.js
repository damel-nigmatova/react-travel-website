import React from 'react';
import { Link } from 'react-router-dom';

function ActivityItem(props) {
  return (
    <>
        <li className="activities-item">
            <figure className="activities-item-pic-wrap">
                <img src={props.src} alt="Travel" className="activities-item-img" />
            </figure>
            <div className="activities-item-info">
                <p className="activities-detail">{props.detail}</p>
                <h5 className='activities-item-text'>{props.text}</h5>
                <p className="activities-item-description">{props.description}</p>
            </div>
            <Link className="activities-item-link" to='./contacts'>
                <button className="activities-btn">
                    Learn more
                </button>
            </Link>
        </li>
    </>
  )
}

export default ActivityItem;