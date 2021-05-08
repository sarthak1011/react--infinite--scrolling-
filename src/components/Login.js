import React, { useState, useEffect } from 'react';


const Login = (props) => {



  useEffect(() => {
    if (localStorage.getItem('isAuthenticated')) {
      props.history.push('/home');
    }

    // eslint-disable-next-line
  }, []);
    const [user, setUser] = useState({
        userName:'',
        password:'',

    })
    const { userName,password} = user


    const onChange = (e) => setUser({...user,[e.target.name]:e.target.value})
    const onSubmit = e =>{
        e.preventDefault();
        if ( userName === 'foo' || password === 'bar') {
            localStorage.setItem('isAuthenticated',true)
            props.history.push('/home');
            
          }  else {
              alert('please enter valid credentials')

          }

        
         
    }
    return (
        <div className='form-container'>
          <h1>
            Account <span className='text-primary'>Login</span>
          </h1>
          <form onSubmit={onSubmit}>
           
            <div className='form-group'>
              <label htmlFor='text'>Username</label>
              <input
                id='text'
                type='text'
                name='userName'
                value={userName}
                onChange={onChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                type='password'
                name='password'
                value={password}
                onChange={onChange}
                required
              />
            </div>
        
            <input
              type='submit'
              value='Login'
              className='btn btn-primary btn-block'
            />
          </form>
        </div>
      );
}

export default Login
