import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';


const Navbar = () => {
    let history = useHistory();


const onLogout = () => {
    localStorage.clear()
    history.push('/');
};

const authLinks = (
  <Fragment>
  
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