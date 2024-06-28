

import './Header.css'
import Logo from '../header/img/Logo.svg'

const Header = () => {
  return (
   <div className=' ContainerWrapper'>
    <div className='Container NavItem'>
        <div className="Logo LogoItem">
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
          <nav className='nav'>
            <ul className='navWrapper'>
              <li className='navMenu'>
                <a className='navlink' href="#">Our Plans</a>
              </li>
              <li className='navMenu' >
                <a className='navlink' href="#">How it Works</a>
              </li>
              <li className='navMenu'>
                <a className='navlink' href="#">Our Menus</a>
              </li>
              <li className='navMenu'>
                <a className='navlink' href="#">Gift Cards</a>
              </li>
              <li className='navMenu'>
                <a className='navlink' href="#">Sustainability</a>
              </li>
              <li className='navMenu'>
                <a className='navlink' href="#">Thanksgiving Box</a>
              </li>
            </ul>
          </nav>
        </div>
      <div className="NavBtn">
        <button className='Navbarbtn' type='submit'>Log In</button>
      </div>
        </div>
    </div>
  )
}

export default Header
