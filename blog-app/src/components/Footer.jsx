import React from 'react';
import './Footer.css';
import usth from '../assets/usth.png'

function Footer() {
    return (
        <>
            <div className='footer-container'>
                <div className='logo'>
                    <img src={usth} alt='USTH' className='usth' />
                </div>

                <div className='group'>
                        <h1>GROUP 10</h1>
                        <p>-------------------------------------------------</p>
                        <p>Pham Duc Khiem:          BA12-095</p>
                        <p>Luyen Pham Ngoc Khanh:   BA12-093</p>
                        <p>Tang Van Anh:            BA12-007</p>
                        <p>Tran Ngoc Viet Anh:      BA12-003</p>
                        <p>Nguyen Dinh Hai:         BA12-068</p>
                        <p>Ngo Huyen Anh:           BA12-006</p>
                </div>

                <div className="group_contact">
                        
                </div>
            
            </div>
        </>
    );
}

export default Footer;
