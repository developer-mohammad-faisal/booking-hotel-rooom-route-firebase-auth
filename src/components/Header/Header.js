import { signOut } from 'firebase/auth';
import React, { Fragment } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {

  const [user] = useAuthState(auth);

  const handleLogOutUser = () => {
      signOut(auth)
  }

  return (
    <Fragment>

<Navbar expand="lg" className='navbar'>
  <Container>
    <Navbar.Brand href="#home"><img width={'200px'} src="https://i.pinimg.com/736x/8d/ae/8c/8dae8cdb2eee1177417df34b2904d107--hotel-logo-great-logos.jpg" alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="m-auto">
      <Link to='/' >Home</Link>
        <Link to='/booking' >Booking</Link>
          <Link to='/services' >Services</Link>
          <Link to='/pricing' >Pricing</Link>
          <Link to='/about' >About</Link>
      </Nav>
      {
        user ? <Link to='/' ><button onClick={handleLogOutUser} >Log Out</button></Link> : <Link to='/login' ><button >Login</button></Link>
      }
          {/* <Link to='/login' ><button >Login</button></Link>
          <Link to="/signup"><button>Sign Up</button></Link> */}
    </Navbar.Collapse>
  </Container>
</Navbar>


    </Fragment>
  );
};

export default Header;