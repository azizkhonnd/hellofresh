import './Main.css'
import mainImg from './img/mainComp-img.png'


const Main = () => {
    return (
        <div className="Container mainItems">
            <div className="items">
                <img width={555} height={350} className='CardImg1' src={mainImg} alt='CardImg' />
            </div>
            <div className='Components'>
                <h2 className='mainTitle'>What’s inside each box?</h2>
                <p className='mainSubtitle'>✓ Easy-to-follow recipes with clear nutritional info
                    <p>✓ High-quality ingredients sourced straight from the farm</p>
                    <p>✓ Convenient meal kits that fit perfectly in the fridge</p>
                    <p>✓ A fun cooking experience that makes you feel unstoppable</p>
                    <p>✓ Innovative packaging designed to reduce waste</p>
                </p>
            <button className='mainBtn'>View our plans</button>
            </div>
        </div>
    )
}

export default Main