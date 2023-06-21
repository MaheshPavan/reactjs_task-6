import React from 'react'
import './Footer.css'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginRight: "5px" }} />
                        <div>
                            <p>Akividu ,A.P</p>
                            <p>India</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "white", marginRight: "5px" }} /> 8332002666
                        </h4>
                    </div>

                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "white"}} />maheshpavankalidindi@gmail.com
                        </h4>
                    </div>

                </div>
                <div className="right">
                    <h4>Something about me </h4>
                    <p>I enjoy discussing new projects and design challenges and enthusiastic to learn new technologies</p>
                    <div className="social">
                    
                    <a href="https://www.facebook.com/profile.php?id=100012316566829"> <FaFacebook size={30} style={{ color: "white" }} />  </a>
                    <a href="https://www.linkedin.com/in/mahesh-pavan-varma-91436321b/"><FaLinkedin size={30} style={{ color: "white"}} /> </a>
                    <a href="https://github.com/MaheshPavan"><FaGithub size={30} style={{ color: "white"}} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
