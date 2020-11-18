import React from 'react';
import classes from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={['container', classes.container].join(' ')}>
            <div>Copyright &copy;2020</div>
            <div className="textRight">
                Built With <span className="red">&heart;</span> by{' '}
                <a href="https://github.com/sohanr">Mizanur Rahman Sohan</a>
            </div>
        </div>
    );
};

export default Footer;
