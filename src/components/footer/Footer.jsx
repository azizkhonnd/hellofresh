import './Footer.css'
import fbIcon from './img/fb.svg'
import twitterIcon from './img/twitter.svg'


const Footer = () => {
  return (
    <div className='Container'>
      <nav className="footerNavbar ">
        <ul className='footerNavMenu' >
          <p className="footerSubtitle">HelloFresh   </p>
          <li className='footerNavWrap'><a className="footerNavlink" href="">Students</a></li>
          <li className='footerNavWrap'><a className="footerNavlink" href="">Blog</a></li>
          <li className='footerNavWrap'><a className="footerNavlink" href="">Recipes</a></li>
          <li className='footerNavWrap'><a className="footerNavlink" href="">Hero Discounts</a></li>
          <li className='footerNavWrap'><a className="footerNavlink" href="">Recipe Directory</a></li>
          <li className='footerNavWrap'><a className="footerNavlink" href="">California Supply Chains Act</a></li>
          <li className='footerNavWrap'><a className="footerNavlink" href="">Delivery Options</a></li>
        </ul>

        <ul className='footerNavMenu' >
          <p className="footerSubtitle">Our company</p>
          <li className='footerNavWrap'><a className="footerNavlink" href="">HelloFresh Group</a></li>
          <li className='footerNavWrap'><a className="footerNavlink" href="">Sustainability</a></li>
          <li className='footerNavWrap'><a className="footerNavlink" href="">Careers</a></li>
          <li className='footerNavWrap'><a className="footerNavlink" href="">Press</a></li>

        </ul>

        <ul className='footerNavMenu' >
          <p className="footerSubtitle">Work with us</p>
          <li className='footerNavWrap'><a className="footerNavlink" href="">Help Center & FAQ</a></li>
          <li className='footerNavWrap'><a className="footerNavlink" href="">Partnership Inquiries</a></li>
          <li className='footerNavWrap'><a className="footerNavlink" href="">Corporate Sales</a></li>
        </ul>

        <ul className='footerNavMenu' >
          <p className="footerSubtitle">Contact us</p>
          <li className='footerNavWrap'><a className="footerNavlink" href="">Partner</a></li>
          <li className='footerNavWrap'><a className="footerNavlink" href="">Influencers</a></li>
          <li className='footerNavWrap'><a className="footerNavlink" href="">Do Not Sell My Personal Information</a></li>
          <li className='footerNavWrap'><a className="footerNavlink" href="">Affiliates</a></li>
        </ul>
        <ul className='footerNavMenu' >
          <li className='footerNavWrap'><a className="footerNavlinkApp" href="">Download our app</a></li>
          <p className="footerSubtitle">Manage your deliveries from anywhere, anytime.</p>
        </ul>
      </nav>
      <div className="socialMedia">
        <nav className='navCondtions'>
          <p className="footerSubtitle">© HelloFresh 2022</p>
          <ul className='footerWrapNav'>
            <li>
              <a className="footerNavlink" href="">Terms and Conditions</a>
            </li>
            <li>
              <a className="footerNavlink" href="">Privacy</a>
            </li>
            <li>
              <a className="footerNavlink" href="">Accessibility</a>
            </li>
          </ul>
        </nav>
        <div className="socMedia">
        <ul className='socialMediaIcons'>
          <li>
            <a href="#"><img src={fbIcon} alt="Facebook" /></a>
          </li>
        </ul>
        <ul className='socialMediaIcons'>
          <li>
            <a href="#"><img src={twitterIcon} alt="twitter" /></a>
          </li>
        </ul>
        <ul className='socialMediaIcons'>
          <li>
            <a href="#"><img src={fbIcon} alt="Instagram" /></a>
          </li>
        </ul>
        </div>


      </div>
    </div>
  )
}

export default Footer