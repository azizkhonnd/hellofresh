
import './Hero.css'
import Frame from './img/frame-svg.svg'


const Hero = () => {
  return (
    <div className="Hero">
      <div className='Container HeroItems'>
        <div className="HeroWrapper">
          <h1 className="HeroTitle">
            Take the stress
            out of mealtime
          </h1>
          <p className="HeroSubtitle">
            America`s Most Popular Meal Kit </p>
          <button className="HeroBtn">View our plans</button>
          <button className="frame"><img src={Frame} alt="Logo" /></button>
        </div>
      </div>

    </div>
  )
}

export default Hero