import React from "react";
import '../../App.css';
import './Products.css';
import ActivityItem from '../Activities';
import { Button } from '../Button';
import Footer from "../Footer";

function Products() {
    return (
    <>

    <div className="products">
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                WATCH TRAILER <i className='far fa <h1 className="products-heading">Products</h1>
        -play-circle'></i>
            </Button>
        </div>
    </div>

    <div className="products-container">
        <ActivityItem />
        <div className="location-card-wrapper">
            <figure className="location-card-img">
                <img src="images/img-8.jpg" alt="The Perfect Location for your next adventure" className="location-card-item-img"/>
            </figure>
            <div className="location-card-info">
                <p className="location-card-detail">Explore</p>
                <h5 className='location-card-text'>The perfect location for your next adventure</h5>
                <p className="location-card-item-description">Located just minutes from the famous Kenai and Kasilof Rivers, our Kenai Cabin Rentals provide the perfect home base for fishing trips, wildlife viewing, hiking and more!</p>
            </div>
        </div>
    </div>

    <Footer />
    </>
    )
}

export default Products;