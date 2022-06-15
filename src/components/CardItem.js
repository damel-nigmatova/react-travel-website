import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
        <li className="cards-item">
            <Link className="cards-item-link" to={props.path}>
                <figure className="cards-item-pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="Travel" className="cards-item-img" />
                </figure>
                <div className="cards-item-info">
                    <h5 className='cards-item-text'>{props.text}</h5>
                    <div className="cards-item-details">
                        <p className="cards-item-location"><i className="far fa-compass"></i> {props.location}</p>
                        <p className="cards-item-activity"><i className="fas fa-cocktail"></i> {props.activity}</p>
                    </div>
                </div>
            </Link>
        </li>
    </>
  )
}

export default CardItem;