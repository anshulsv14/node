import React from 'react'

const Footer = () => {
  return (
   <>
   <div id='footer' >
     <footer>
        <div className="footer-container">
            <div className="footer-column">
                <h3>About Us</h3>
                <p>We are a company committed to providing great services.</p>
            </div>
            <div className="footer-column">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Contact</h3>
                <p>Email: info@example.com</p>
                <p>Phone: +1 234 567 890</p>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2025 My Website. All rights reserved.</p>
        </div>
    </footer>
   
    </div>
   </>
  )
}

export default Footer
