import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeStyles.css';

const HomePage = () => {
  return (
    <div className="body">
      <div className="home-container">
        <header className="header">
          <h1 className="header-text"><em>Prison Management System</em></h1>
        </header>
        <div className="image-container">
          
        </div>
        <div className='image-container1'>
        
        </div>
        <nav className="sidebar111">
          <div className='link-container10'>
            <p><em>OPTIONS</em></p>
          </div>
          <div className="link-container">
            <Link to="/Register" className="sidebar-link">
              <em>Add Prisoner Details</em>
            </Link>
          </div>
          <div className="link-container">
            <Link to="/PrisonRegister" className="sidebar-link">
             <em>Add Prison Details</em> 
            </Link>
          </div>
          <div className="link-container">
            <Link to="/queryresult1" className="sidebar-link">
              <em>Analysis 1</em>
            </Link>
          </div>
          <div className="link-container">
            <Link to="/queryresult2" className="sidebar-link">
              <em>Analysis 2</em>
            </Link>
          </div>
          <div className="link-container">
            <Link to="/queryresult3" className="sidebar-link">
              <em>Analysis 3</em>
            </Link>
          </div>
          <div className="link-container">
            <Link to="/queryresult4" className="sidebar-link">
              <em>Analysis 4</em>
            </Link>
          </div>
          <div className="link-container">
            <Link to="/queryresult5" className="sidebar-link">
              <em>Analysis 5</em>
            </Link>
          </div>
        
        </nav>
        
        <div className='booddo'>
        <hr></hr>
            <p>This is a simple prison management server .You can insert prison or insert prisoner details here </p>
            <p>You can ask some analytics query here.</p>
            
        </div>
      </div>
    </div>
  );
};

export default HomePage;
