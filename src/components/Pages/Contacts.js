import React from 'react';
import '../../App.css';
import './Contacts.css';
import { Link } from 'react-router-dom';

function Contacts() {
  return (
    <>
    <div className="contacts">
        <div className="contact-item">
            <h1 className="contacts-heading">Contact TRVL <i className="fab fa-typo3"></i></h1>
            <p className="contacts-text">A journey of a thousand miles begins with a single step</p>
            <div className='hero-btns'>
                <Link className='btns' to="/products">
                    View Products
                </Link>
            </div>
        </div>
        <div className="contact-item">
            <p className='contact-details'><i className="fas fa-phone"></i> +1 (989) 678 75 75</p>
            <p className='contact-details'><i className="fas fa-at"></i> customer.service@trvl.com</p>
            <p className="contact-details"><i className="far fa-compass"></i> 560-4044 Euclid Ave, Bucharest</p>
        </div>
    </div>
    </>
  )
}

export default Contacts