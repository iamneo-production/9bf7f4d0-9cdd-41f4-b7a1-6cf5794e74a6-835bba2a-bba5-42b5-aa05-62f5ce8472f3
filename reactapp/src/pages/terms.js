import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import "../assets/css/terms.css"

export class terms extends Component {
  render() {
    return (
      <div className="terms-container">
      <div className="top-text">
        <Link to="/dashboard">Dashboard</Link>
        </div>
      <h1 className="terms-heading">Terms and Conditions</h1>
      <div className="terms-content">
        <p>
        Use of the Website
        Eligibility: You must be at least 18 years old to use this Website. By using the Website, you represent and warrant that you are at least 18 years old.
        
        Registration: To access certain features of the Website, you may be required to register and create an account. You agree to provide accurate and complete information during the registration process and to update such information to keep it accurate and current.
        
        User Content: You are solely responsible for any content you submit to the Website, including but not limited to resumes, profiles, and other information. You agree not to submit any false or misleading information and to comply with all applicable laws and regulations.
        
        Prohibited Activities: You agree not to:
        
        Use the Website for any unlawful purpose or in violation of these Terms.
        Use the Website to harass, impersonate, or harm others.
        Transmit any harmful code or malware.
        Attempt to gain unauthorized access to any part of the Website.
        Interfere with the operation of the Website.
        </p>
        <br/>
        <p>
        Acceptance of Terms :
By accessing and using this online voting page (the "VoteEase"), you agree to comply with and be bound by these terms and conditions. If you do not agree with any of these terms, please do not use the Site.

Eligibility :
You must meet the eligibility criteria established by the organizers of the voting process to participate. Failure to meet these criteria may result in disqualification.

Voting Process :
a. You may only vote once per person, unless otherwise specified.
b. Voting is confidential, and your choices will not be disclosed to others.
c. Any attempt to manipulate the voting process, including but not limited to, multiple voting, automated voting, or fraud, may result in disqualification.

Accuracy of Information :
You agree to provide accurate, current, and complete information when participating in the voting process. The organizers reserve the right to verify your eligibility and information.
Disqualification :
The organizers reserve the right to disqualify any participant who violates these terms and conditions or engages in any fraudulent or inappropriate conduct.

Privacy :
a. Your personal information will be handled in accordance with our Privacy Policy, which can be accessed on this Site.
b. The organizers will take reasonable measures to protect your personal information, but they are not responsible for any data breaches or unauthorized access.</p>
        <p>
        Intellectual Property :
All content and materials on this Site, including but not limited to text, images, logos, and trademarks, are the property of the organizers and are protected by copyright and trademark laws.

Disclaimer of Warranty :
This Site and the voting process are provided "as is" without any warranty of any kind, either express or implied, including but not limited to, the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.

Limitation of Liability :
The organizers will not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of this Site or participation in the voting process.

Modification of Terms :
The organizers reserve the right to modify these terms and conditions at any time. Any changes will be posted on this Site, and your continued use of the Site will constitute your acceptance of the modified terms.

Governing Law :
These terms and conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction].

Contact Information :
For questions or concerns regarding these terms and conditions, please contact [Contact Information].
Again, it's crucial to consult with a legal professional to ensure that these terms and conditions comply with the specific legal requirements in your jurisdiction and are suitable for your online voting page.
        </p>
        <br/>
       </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(terms)

