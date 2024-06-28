import './MainCards.css'
import cardImg1 from './img/cardImg-1.png'
import cardImg2 from './img/cardImg-2.png'
import cardImg3 from './img/cardImg-3.png'
import cardImg4 from './img/cardImg-4.png'
import cardImg5 from './img/people-1.jpeg'
import cardImg6 from './img/dog.jpeg.png'
import cardImg7 from './img/family.png'
import cardImg8 from './img/kids.png'




const mainCards = () => {
    return (
        <div className='Container'>
            <div className="mainCardsItems">
                <h2 className='cardTitle'>Over 30+ fresh recipes every week</h2>
                <p className='cardSubtitle'>Easy meals designed by professional chefs and nutritionists</p>
            </div>
            <div className="cardsItem">
                <img width={262} height={315} className='CardImg1' src={cardImg1} alt='CardImg' />
                <img width={262} height={315} className='CardImg1' src={cardImg2} alt='CardImg' />
                <img width={262} height={315} className='CardImg1' src={cardImg3} alt='CardImg' />
                <img width={150} height={315} className='CardImg1' src={cardImg4} alt='CardImg' />
            </div>
            <div className='mainCardBtnItem'>
                <button className='mainCardBtn'>
                    View our menus
                </button>
            </div>



            <div className='mainCardsMainWrap'>
                <div className='MainRow'>
                    <h2 className="mainCardsMain">
                        Cook it. Love it. Tag it #HelloFreshPics
                    </h2>
                    <p className='RowSubtitleItem'>Follow us on Instagram @hellofresh</p>
                </div>
                <div className='cardWrapper cardCol'>
                    <div className='cardRow'>
                        <img width={263} height={329} className='CardImg1' src={cardImg5} alt='CardImg' />
                        <h4 className='ItemsTitle'>bdanielle1285</h4>
                        <p className='cardRowSubtitle'>My little chef helping me make dinner tonight and trying out some of his new kitchen utensils I got him!</p>
                    </div>
                    <div className='cardRow'>
                        <img width={263} height={329} className='CardImg1' src={cardImg6} alt='CardImg' />
                        <h4 className='ItemsTitle'>bdanielle1285</h4>
                        <p className='cardRowSubtitle'>I’m helping out 🧑🏽‍🍳 #masterchef #bestboy</p>
                    </div>
                    <div className='cardRow'>
                        <img width={263} height={329} className='CardImg1' src={cardImg7} alt='CardImg' />
                        <h4 className='ItemsTitle'>bdanielle1285</h4>
                        <p className='cardRowSubtitle'>Drew and the kids made mom dinner tonight! Drew and I had our doubts but WOW was it tasty!</p>
                    </div>
                    <div className='cardRow' >
                        <img width={263} height={329} className='CardImg1' src={cardImg8} alt='CardImg' />
                        <h4 className='ItemsTitle'>bdanielle1285</h4>
                        <p className='cardRowSubtitle'>We had a cooking class yesterday and we had such an amazing time 😁 They had such a great time working as a team and I cant wait for our weekly cooking class  🙌🏻😁 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default mainCards