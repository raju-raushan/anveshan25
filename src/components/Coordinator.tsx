import React from 'react';
import styled from 'styled-components';

const Card = ({ coordinator }) => { // Added coordinator prop for dynamic data
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="back-content">
              {/* Mini Photo at the center */}
              {coordinator && coordinator.miniPhoto && (
                <img src={coordinator.miniPhoto} alt="Mini Photo" className="mini-photo" />
              )}
              {/* Name, Designation, Contact Number at bottom */}
              <div className="back-details">
                <strong>{coordinator ? coordinator.name : "Coordinator Name"}</strong>
                <p>{coordinator ? coordinator.designation : "Designation"}</p>
                <p>{coordinator ? coordinator.contact : "+1234567890"}</p>
              </div>
            </div>
          </div>

          <div className="front">
            <div className="img">
              {/* Image of coordinator at front */}
              {coordinator && coordinator.frontImage && (
                <img src={coordinator.frontImage} alt="Coordinator" className="coordinator-image" />
              )}
              {/* The moving border/circles remain unchanged */}
              <div className="circle" />
              <div className="circle" id="right" />
              <div className="circle" id="bottom" />
            </div>

            <div className="front-content">
              {/* Removed the badge and description as per new requirements for the front content area */}
              {/* Name at the bottom of the front card */}
              <div className="front-name">
                <p><strong>{coordinator ? coordinator.name : "Coordinator Name"}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    overflow: visible;
    width: 190px;
    height: 254px;
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
    box-shadow: 0px 0px 10px 1px #000000ee;
    border-radius: 5px;
  }

  .front,
  .back {
    background-color: #151515;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
  }

  .back {
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .back::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
    animation: rotation_481 5000ms infinite linear;
  }

  .back-content {
    position: absolute;
    width: 99%;
    height: 99%;
    background-color: #151515;
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column; /* Changed to column to stack elements */
    justify-content: space-around; /* Distribute space */
    align-items: center;
    padding: 10px; /* Added padding */
  }

  .mini-photo {
    width: 80px; /* Adjust size as needed */
    height: 80px; /* Adjust size as needed */
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px; /* Space between photo and text */
    border: 2px solid #ff9966; /* Added a border for better visibility */
  }

  .back-details {
    text-align: center;
    color: white; /* Ensure text is visible */
    font-size: 14px;
    
    strong {
      font-size: 16px;
      margin-bottom: 5px;
      display: block;
    }
    p {
      margin: 2px 0;
      font-size: 12px;
    }
  }


  .card:hover .content {
    transform: rotateY(180deg);
  }

  @keyframes rotation_481 {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }

  .front {
    transform: rotateY(180deg);
    color: white;
  }

  .front .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end; /* Align content to the bottom */
    align-items: center; /* Center horizontally */
  }

  /* Removed badge and description styles as they are no longer needed for the front content */

  .front-name {
    box-shadow: 0px 0px 10px 5px #00000088;
    width: calc(100% - 20px); /* Adjust width considering padding */
    padding: 10px;
    background-color: #00000099;
    backdrop-filter: blur(5px);
    border-radius: 5px;
    text-align: center;
    margin-bottom: 10px; /* Space from the bottom edge */
  }

  .front .img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .coordinator-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image covers the entire front */
    border-radius: 5px; /* Match card border-radius */
  }

  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #ffbb66;
    position: absolute; /* Changed to absolute to float over the image */
    filter: blur(15px);
    animation: floating 2600ms infinite linear;
    z-index: 1; /* Ensure circles are above the image */
    opacity: 0.7; /* Make them slightly transparent */
  }

  #bottom {
    background-color: #ff8866;
    left: 50px;
    top: 0px;
    width: 150px;
    height: 150px;
    animation-delay: -800ms;
  }

  #right {
    background-color: #ff2233;
    left: 160px;
    top: -80px;
    width: 30px;
    height: 30px;
    animation-delay: -1800ms;
  }

  @keyframes floating {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`;

export default Card;