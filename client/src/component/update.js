import React from 'react';
import './App.css';

const UpdatePassword= () => {
  return (
    <div className="form-container">
      <div className="form-left">
        <h2>Hello!</h2>
        <p>Forgot your Password</p>
        <form>
          <div className="input-group">
            <label>
              <input type="text" placeholder="New Password" />
              <i className="icon user-icon"></i>
            </label>
          </div>
          <div className="input-group">
            <label>
              <input type="password" placeholder="Confirm Password" />
              <i className="icon lock-icon"></i>
            </label>
          </div>
          {/* <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div> */}
          <button className="btn">Update</button>
        </form>
      </div>
      <div className="form-right">
        <h2>Welcome Back!</h2>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          architecto labore recusandae dolor.
        </p> */}
        <img className='img_edit'
            src="https://static.vecteezy.com/system/resources/thumbnails/004/112/232/small/forgot-password-and-account-login-for-web-page-protection-security-key-access-system-in-smartphone-or-computer-flat-illustration-vector.jpg" 
            alt="Welcome Image" 
            style={{ width: '150px', height: 'auto', marginTop: '10px' }}
          />
      </div>
    </div>
  );
};

export default UpdatePassword;
