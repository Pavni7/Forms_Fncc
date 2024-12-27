import React, { useState } from 'react';
// import './FeedbackForm.css';
import './App.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', formData);
    // Add submission logic (e.g., API call) here
  };

  return (
    <div className="feedback-form-container">
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>Feedback Form</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Rating</label>
          <div className="rating-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={formData.rating >= star ? 'star filled' : 'star'}
                onClick={() => handleRatingChange(star)}
              >
                &#9733;
              </span>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="comments">Comments</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Enter your comments"
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      <style jsx>{`
        .feedback-form-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          {/* background: linear-gradient(135deg,rgb(5, 5, 5),#b79af1); */}
          background: white;
          padding: 20px;
        }

        .feedback-form {
    background: rgba(13, 13, 13, 0.85);
    /* background: linear-gradient(135deg, rgb(56, 53, 56), #b79af1); */
    border-radius: 20px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    border: 5px solid #b79af1; /* Added purple border */
    padding: 30px;
    max-width: 500px;
    width: 100%;
}

        .feedback-form h2 {
          text-align: center;
          color: white;
          font-family: 'Arial', sans-serif;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          margin-bottom: 8px;
          font-weight: bold;
          color: white;
        }

        .form-group input,
        .form-group textarea {
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 10px;
          font-size: 16px;
          background: white;
          box-shadow: inset 0 4px 6px rgba(232, 218, 218, 0.1);
           
        }

        .form-group textarea {
          resize: none;
          height: 100px;
        }

        .rating-stars {
          display: flex;
          gap: 10px;
        }

        .rating-stars .star {
          font-size: 28px;
          cursor: pointer;
          color: #ddd;
          transition: color 0.3s;
        }

        .rating-stars .star.filled {
          color: #f5a623;
        }

        .submit-button {
          width: 100%;
          padding: 12px;
          background-color:rgb(170, 142, 207);
          color: black;
          border: none;
          border-radius: 25px;
          font-size: 18px;
          cursor: pointer;
          font-family: 'Arial', sans-serif;
          transition: background-color 0.3s, box-shadow 0.3s;
        }

        .submit-button:hover {
          background-color:rgb(153, 89, 182);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }
         
      `}</style>
    </div>
  );
};

export default FeedbackForm;
