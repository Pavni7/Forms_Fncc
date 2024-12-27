import React, { useState } from 'react';
import './App.css';

const ProfileUpdateForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    lastName: '',
    firstName: '',
    mobileNumber: '',
    userID: '',
    address: '',
    password: '',
    confirmPassword: '',
    moneyTaken: '',
    currentBalance: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="profile-body">
      <div className="profile-frm">
        <h2>Profile Update</h2>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="Address"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="moneyTaken"
            placeholder="Money Taken"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="currentBalance"
            placeholder="Current Balance"
            onChange={handleChange}
            required
          />
          <button type="submit">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdateForm;
