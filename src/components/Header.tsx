import React from 'react';
import '../styles/Header.css';

export function Header() {
    return (
        <div className='application-title-bar'>
            <div className='application-title'>
                <img src="https://venturus.org.br/wp-content/themes/vent-theme/assets/img/logo-new.svg" alt="logo" />
                <span>Squad Management Tool</span>
            </div>

            <div className='user-information'>
                <span>John Doe</span>
                <img src="http://www.github.com/ftapparo.png" alt="avatar" />
            </div>
        </div>
    );
}