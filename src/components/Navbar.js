import React, { Fragment, useContext, useEffect } from 'react';
import { Link,useHistory } from 'react-router-dom';


const Navbar = () => {
    let history = useHistory();


const onLogout = () => {
    localStorage.clear()
    history.push('/');
};

const authLinks = (
  <Fragment>
  
    {/* <li>
    <Link to='/about'>About</Link>
    </li> */}
     
    {/* <li>Hello {user && user.name}</li> */}
    <li>
      <a onClick={onLogout} >
        <i className='fas fa-sign-out-alt' />{' '}
        <span className='hide-sm'>Logout</span>
      </a>
    </li>
  </Fragment>
);


return (
  <div className='navbar bg-primary'>
   
    <ul>{ authLinks}</ul>
  </div>
);
};




export default Navbar;