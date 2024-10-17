import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <>
            <div className='footer_container'>
                <div className='group'>
                    <div className='group_heading'><h1>Get in touch</h1></div>
                        <div className='group_colume'>
                            <div className='group_name'>
                                <p>Tran Ngoc Viet Anh</p>
                                <p>Ngo Huyen Anh</p>
                                <p>Tang Van Anh</p>
                            </div>
                            <div className='group_name'>
                                <p>Nguyen Dinh Hai</p>
                                <p>Pham Duc Khiem</p>
                                <p>Luyen Pham Ngoc Khanh</p>
                            </div>
                        </div>
                </div>
                <div className='footer_connect'>
                    <div className='connect'>
                        <h1 className='connect_heading'>Connect</h1>
                        <div className='group_icon'>
                            <div className='icon'>
                                <div className='icon_list'><FontAwesomeIcon icon={faFacebookF} style={{color: "#fafafa",}} /></div>
                                <div className='icon_list'><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /></div>
                                <div className='icon_list'><FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} />  </div>
                                <div className='icon_list'><FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} /></div>
                            </div>
                        </div>
                    </div>                    
                </div>
            
            </div>
        </>
    );
}

export default Footer;
