import React from 'react'
import Typical from "react-typical";
import ScrollService from '../../utilities/ScrollService';
import './Profile.css'

export default function Profile() {
    return (
        <div className="profile-container">
          <div className="profile-parent">
            <div className="profile-details">
              <div className="colz">
                <div className="colz-icon">
                  <a href="https://github.com/Firoz664/">
                  <i class="fa fa-github"></i>
                  </a>
                  <a href="https://leetcode.com/Firoz77/">                                                       
                  <i className="bi bi-code-slash"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-google-plus-square" />
                  </a>
                  <a href="/">                                                       
                    <i className="fa fa-instagram" />
                  </a>
                
                  <a href="https://www.linkedin.com/in/md-shams-firoz-02a7b7111">
                  <i class="fa fa-linkedin-square"></i>
                  </a>
                </div>
              </div>
              <div className="profile-details-name">
                <span className="primary-text">
                  {" "}
                  Hello, I'M <span className="highlighted-text">Md Shams Firoz</span>
                </span>
              </div>
              <div className="profile-details-role">
                <span className="primary-text">
                  {" "}
                  <h1>
                    <Typical
                      loop={Infinity}
                      steps={[
                        " MERN Enthusiastic Dev 😎",
                       2000,
                        "Full stack Developer 💻",
                       2000,
                        "Java Enthusiastic 📱",
                       2000,
                        " React Cross Platform Dev 🔴",
                       2000,
                        "Machine Learning Enthusiastic🌐",
                       2000,
                      ]}
                    />
                  </h1>
                </span>
                <span className="profile-role-tagline">
                  Knack of building applications with front and back end operations.
                </span>
              </div>
    
              <div className="profile-options">
                <button className="btn primary-btn"
                  onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                > Hire Me </button>
                <a href="Resume.pdf" download="Md Shams.pdf">
                  <button className="btn highlighted-btn">Get Resume</button>
                </a>
              </div>
            </div>
            <div className="profile-picture">
              <div className="profile-picture-background"></div>
            </div>
          </div>
        </div>
      );
 }