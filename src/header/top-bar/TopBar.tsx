import React from 'react';
import './TopBar.css'

const TopBar: React.FC = () => {
  return (
    <div className="top_bar">
      <div className="container">
        <div className="row">
          <div className="col d-flex flex-row">
            <div className="phone">+30 698 871 4147</div>
            <div className="social">
              <ul className="social_list">
                <li className="social_list_item"><a href="https://www.instagram.com/mykonosbooker/?hl=en"><i className="fa fa-instagram"></i></a></li>
                <li className="social_list_item"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li className="social_list_item"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li className="social_list_item"><a href="#"><i className="fa fa-pinterest"></i></a></li>
              </ul>
            </div>
            <div className="user_box ml-auto d-none">
              <div className="user_box_login user_box_link"><a href="#">login</a></div>
              <div className="user_box_register user_box_link"><a href="#">register</a></div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  );
}
export default TopBar