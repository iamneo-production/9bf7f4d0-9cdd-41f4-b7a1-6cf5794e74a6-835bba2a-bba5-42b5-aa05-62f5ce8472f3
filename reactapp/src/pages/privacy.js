import React, { Component } from 'react';
import "../assets/css/privacy.css";
import { Link } from 'react-router-dom';
export default class privacy extends Component {
  render() {
    return (
        <div className='privacyimage'>
        <div className="privacy-policy">
        <div className="top-text">
        <Link to="/dashboard">Dashboard</Link>
      </div>
        <h1>Privacy Policy</h1>
  
        <p>This Privacy Policy explains how VoteEase collects, uses, and discloses personal information when you use our services and website.</p>
  
        <h2>Information We Collect</h2>
        <p>We may collect information from you when you visit our website, register for an account, make a purchase, or interact with our services. This information may include:</p>
        <ul>
          <li>Your name</li>
          <li>Email address</li>
          <li>Address</li>
          <li>Phone number</li>
          <li>Usage data</li>
        </ul>
  
        <h2>How We Use Your Information</h2>
        <p>We use the collected information for various purposes, including:</p>
        <ul>
          <li>Providing and maintaining our services</li>
          <li>Improving our services</li>
          <li>Processing payments</li>
          <li>Communicating with you</li>
          <li>Complying with legal obligations</li>
        </ul>
        <h2>Security</h2>
        <p>We take reasonable measures to protect your personal information, but no method of transmission over the internet is completely secure.</p>
  
        {/* Add more sections as needed for your specific privacy policy */}
      </div>
      </div>
    )
  }
}