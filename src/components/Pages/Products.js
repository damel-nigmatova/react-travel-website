import React from "react";
import '../../App.css';
import './Products.css';
import ActivityItem from '../Activities';
import { Button } from '../Button';
import Carousel from "better-react-carousel";
import ReviewItem from "../ReviewItem";

function Products() {
    return (
    <>

    <div className="products">
        <h1 className="products-heading">Products</h1>
        <p className="products-text">Discover Furnished Kenai Peninsula Rental Cabins</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
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

    <div className="carousel-images">
    <h2 className="reviews-heading">What people think about TRVL</h2>
    
    <Carousel className="carousel-wrapper" cols={3} rows={1} gap={10} loop>
        <Carousel.Item>
        <div className="reviews-items">
            <img src="images/img-12.jpg" alt="Testimonials" className="reviews-item-img" />
            <div className="reviews-item-text">
                <p className="reviews-detail">Stanlet's</p>
                <h5 className='reviews-text'>King</h5>
                <p className="reviews-description">Minutes from the famous Kenai and Kasilof Rivers, our Kenai Cabin Rentals provide the perfect home base for fishing trips. Reel in your very own trophy King Salmon.</p>
            </div>
            <ReviewItem />
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="reviews-items">
            <img src="images/img-11.jpg" alt="Testimonials" className="reviews-item-img" />
            <div className="reviews-item-text">
                <p className="reviews-detail">Sarah's</p>
                <h5 className='reviews-text'>Smith</h5>
                <p className="reviews-description">Cook Inlet and the Kenai Peninsula are known for some of the best Alaskan Halibut Fishing Charters. Our Soldotna cabins keep you close to the best Halibut fishing in Alaska.</p>
            </div>
            <ReviewItem />
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="reviews-items">
            <img src="images/img-13.jpg" alt="Testimonials" className="reviews-item-img" />
            <div className="reviews-item-text">
                <p className="reviews-detail">Kate's</p>
                <h5 className='reviews-text'>Brown</h5>
                <p className="reviews-description">Cook Inlet and the Kenai Peninsula are known for some of the best Alaskan Halibut Fishing Charters. Our Soldotna cabins keep you close to the best Halibut fishing in Alaska.</p>
            </div>
            <ReviewItem />
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="reviews-items">
            <img src="images/img-14.jpg" alt="Testimonials" className="reviews-item-img" />
            <div className="reviews-item-text">
                <p className="reviews-detail">Stanlet's</p>
                <h5 className='reviews-text'>Carpenter</h5>
                <p className="reviews-description">Minutes from the famous Kenai and Kasilof Rivers, our Kenai Cabin Rentals provide the perfect home base for fishing trips. Reel in your very own trophy King Salmon.</p>
            </div>
            <ReviewItem />
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="reviews-items">
            <img src="images/img-10.jpg" alt="Testimonials" className="reviews-item-img" />
            <div className="reviews-item-text">
                <p className="reviews-detail">Sarah's</p>
                <h5 className='reviews-text'>Smith</h5>
                <p className="reviews-description">Cook Inlet and the Kenai Peninsula are known for some of the best Alaskan Halibut Fishing Charters. Our Soldotna cabins keep you close to the best Halibut fishing in Alaska.</p>
            </div>
            <ReviewItem />
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="reviews-items">
            <img src="images/img-12.jpg" alt="Testimonials" className="reviews-item-img" />
            <div className="reviews-item-text">
                <p className="reviews-detail">Ivan's</p>
                <h5 className='reviews-text'>Petrov</h5>
                <p className="reviews-description">Cook Inlet and the Kenai Peninsula are known for some of the best Alaskan Halibut Fishing Charters. Our Soldotna cabins keep you close to the best Halibut fishing in Alaska.</p>
            </div>
            <ReviewItem />
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="reviews-items">
            <img src="images/img-11.jpg" alt="Testimonials" className="reviews-item-img" />
            <div className="reviews-item-text">
                <p className="reviews-detail">Sarah's</p>
                <h5 className='reviews-text'>Smith</h5>
                <p className="reviews-description">Cook Inlet and the Kenai Peninsula are known for some of the best Alaskan Halibut Fishing Charters. Our Soldotna cabins keep you close to the best Halibut fishing in Alaska.</p>
            </div>
            <ReviewItem />
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="reviews-items">
            <img src="images/img-14.jpg" alt="Testimonials" className="reviews-item-img" />
            <div className="reviews-item-text">
                <p className="reviews-detail">Stanlet's</p>
                <h5 className='reviews-text'>Carpenter</h5>
                <p className="reviews-description">Minutes from the famous Kenai and Kasilof Rivers, our Kenai Cabin Rentals provide the perfect home base for fishing trips. Reel in your very own trophy King Salmon.</p>
            </div>
            <ReviewItem />
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="reviews-items">
            <img src="images/img-10.jpg" alt="Testimonials" className="reviews-item-img" />
            <div className="reviews-item-text">
                <p className="reviews-detail">Jane's</p>
                <h5 className='reviews-text'>Green</h5>
                <p className="reviews-description">Cook Inlet and the Kenai Peninsula are known for some of the best Alaskan Halibut Fishing Charters. Our Soldotna cabins keep you close to the best Halibut fishing in Alaska.</p>
            </div>
            <ReviewItem />
        </div>
        </Carousel.Item>
    </Carousel>
    </div>
    </div>
    </>
    )
}

export default Products;