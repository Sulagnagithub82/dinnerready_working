//import modules
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {Button} from'./Button';

//Navbar

function Navbar() {
  //Toggle between hambergur menu and crossbar
  const [click, setClick] = useState(false);
  const [button, setButton]= useState(true);

  const handleClick = () => setClick(!click);
 //Close menubar when responsive
  const closeMobileMenu =() => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    }else {
      setButton(true);
    }
  };

  useEffect(() => {
      showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
   <>
      <nav className="navbar">
          <div className="navbar-container">
            {/* Link used instaed of <a></a> tag */}
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              Dinner Ready!!
            </Link>
            {/* FontAwesome used for icons,CDN pasted in index.html */}
            {/* Toggle between cros bar and hamburger menu */}
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            {/* Start of Nav items */}
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='./usingajax' className='nav-links' onClick={closeMobileMenu}>
                  Random Pictures
                </Link>
              </li>
              {/* <li className='nav-item'>
                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                  Products
                </Link>
              </li> */}
              <li className='nav-item'>
                <Link to='/signin' className='nav-links' onClick={closeMobileMenu}>
                  Login
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Sign up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'><Link to='/sign-up'>SIGN UP</Link></Button>}
             {/* End of Nav items */}
          </div>
      </nav>
   </>
  )
}

export default Navbar
