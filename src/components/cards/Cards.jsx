import cardImg1 from './img/card-img-1.png'
import cardImg2 from './img/card-img-2.png'
import cardImg3 from './img/card-img-3.png'
import cardImg4 from './img/card-img-4.png'



import './Cards.css';

const Cards = () => (
    <div className="Container cardContainer ">
        <div className="cardWrapper">
            <div className='card'>
                <img width={120} height={120} className='CardImg1' src={cardImg1} alt='CardImg' />
                <h4 className='Cardtitle'>No skimpin’ on the chicken!</h4>
                <p className='CardSubtitle'>Or steak, or fish, or plant protein.</p>
            </div>

            <div className='card'>
                <img width={120} height={120} className='CardImg1' src={cardImg2} alt='CardImg' />
                <h4 className='Cardtitle'>No commitment whatsoever</h4>
                <p className='CardSubtitle'>Skipping weeks or cancelling is super easy.</p>
            </div>

            <div className='card'>
                <img width={120} height={120} className='CardImg1' src={cardImg3} alt='CardImg' />
                <h4 className='Cardtitle'>The most 5-star reviews</h4>
                <p className='CardSubtitle'>Our huge recipe selection wows week after week.</p>
            </div>

            <div className='card'>
                <img width={120} height={120} className='CardImg1' src={cardImg4} alt='CardImg' />
                <h4 className='Cardtitle'>Fresh and affordable</h4>
                <p className='CardSubtitle'>Chef-created deliciousness from $7.49 per meal.</p>
            </div>
        </div>
        <div className='cardRow'>
        <button className='cardBtn'>Get Started</button>
        </div>


       
    </div>
);

export default Cards;
