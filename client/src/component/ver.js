import React from 'react';
 

const SubmissionPage = () => {
  return (
    <div className="submission-page-container">
      <div className="submission-message">
        <h1>Your data is verified Successfully 
        You can invest and takes loans</h1>
         
        <div className="submission-image">
          <img 
            src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-approved_516790-147.jpg" 
            alt="Submitted Illustration" 
          />
        </div>
      </div>

      <style jsx>{`
        .submission-page-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg,rgb(134, 70, 134),rgb(122, 81, 197));
          padding: 20px;
        }

        .submission-message {
          text-align: center;
          background: linear-gradient(135deg,rgb(242, 232, 242),rgb(122, 81, 197));
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 40px;
          max-width: 500px;
          width: 100%;
        }

        .submission-message h1 {
          color: #333;
          font-size: 24px;
          margin-bottom: 10px;
        }

        .submission-message p {
          color: #666;
          font-size: 18px;
          margin-bottom: 30px;
        }

        .submission-image img {
          max-width: 50%;
          height: auto;
          border
        }
      `}</style>
    </div>
  );
};

export default SubmissionPage;
