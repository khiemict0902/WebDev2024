import React from 'react';
import usth from './assets/usth.png';
import home from './assets/home.png';
import phone_call from './assets/phone_call.png'
import email from './assets/email.png'
import './Footer.css'

function Footer() {
    return (
        <div>
            <div >
                <img src={usth} alt='USTH' className='usth' />
                
            </div>


            <div className='address' >
                <img src={home} alt='Home' className='home' />
                <h1>Địa chỉ</h1>
            </div>

            <div>
                <p className='adress_1'>
                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                </p>

                
            </div>

             
            <div className='phone_name' >
                <img src={phone_call} alt='phone_call' className='phone_call'/>
                <p>
                    09xxxxxxxxxxxx
                </p>
                
            </div>

            <div className='email'>
                <img src={email} alt='' className='email_1' />

                <p>
                    xxxxxxxxxxxxxxxxx
                </p>
            </div>
        </div>
    );
}

export default Footer;
