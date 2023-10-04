import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from "../app/actions";
import Birthday from "../assets/images/birthday.jpg"
import marriage from "../assets/images/marriage.jpg"
import farewell from "../assets/images/farewell.jpg"
import dj from "../assets/images/dj.jpg"
import '../assets/css/dashboard.css';

const Dashboard = () => {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="sidebar-nav">
          <li>
            <button onClick={() => navigate('/Homepage')}>Home</button>
          </li>
          <li>
            <button onClick={() => navigate('/votehere')}>Vote Here</button>
          </li>
          <li>
            <button onClick={() => navigate('/aboutus')}>About Us</button>
          </li>
          <li>
            <button onClick={() => navigate('/faq')}>FAQs</button>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className='title'>
        <h1>Welcome <span className="user_name">{username}</span></h1>
        <p className="welcome-text">Let's vote for a revolution!</p>
        <p className="sub-text">"Democracy is based upon the conviction there are extraordinary possibilities in ordinary people."</p>
        </div>
        {/* Image Rows */}
        <div className="image-row">
          <img src={Birthday}alt="Image 1" className="dashboard-image" />
          <img src={marriage} alt="Image 2" className="dashboard-image" />
        </div>
        <div className="image-row">
          <img src={dj} alt="Image 3" className="dashboard-image" />
          <img src={farewell}alt="Image 4" className="dashboard-image" />
        </div>
        
        {/* You can display other user-related information here */}
      </main>
    </div>
  );
}

export default Dashboard;
