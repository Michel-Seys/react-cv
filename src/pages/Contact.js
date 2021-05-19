import React from 'react';
import Navigation from "../components/Navigation";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";

const Contact = () => {
    return (
        <div className="contact">
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Luxembourg</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="+352/691 691 691">
                                <span className="clickInput" onClick={() => { alert('Téléphone copié !!')}}>+352/691 691 691</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="email@email.com">
                                <span className="clickInput" onClick={() => { alert('Email copié !!')}}>email@email.com</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                            <a href="https://www.google.lu" target="_blank" rel="noopener noreferrer">
                                <h4>LinkedIn</h4>
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://www.google.lu" target="_blank" rel="noopener noreferrer">
                                <h4>GitHub</h4>
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.google.lu" target="_blank" rel="noopener noreferrer">
                                <h4>Twitter</h4>
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.google.lu" target="_blank" rel="noopener noreferrer">
                                <h4>CodePen</h4>
                                <i className="fab fa-codepen"></i>
                            </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
