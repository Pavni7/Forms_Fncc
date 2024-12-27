import React from 'react';

const VerifiedPage = () => {
  return (
    <div className="verified-page-container">
      <div className="verified-message">
        <h1>Your data is verified Successfully 
        You can invest and take loans</h1>
         
        <div className="verified-image">
          <img 
            src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-approved_516790-147.jpg" 
            alt="Verified Illustration" 
          />
        </div>
      </div>

      <style jsx>{`
        .verified-page-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(135deg,rgb(134, 70, 134),rgb(122, 81, 197));
          padding: 20px;
        }

        .verified-message {
          text-align: center;
          background: linear-gradient(135deg,rgb(242, 232, 242),rgb(122, 81, 197));
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 40px;
          max-width: 500px;
          width: 100%;
        }

        .verified-message h1 {
          color: #333;
          font-size: 24px;
          margin-bottom: 10px;
        }

        .verified-image img {
          max-width: 50%;
          height: auto;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default VerifiedPage;
