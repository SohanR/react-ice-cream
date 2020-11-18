import React from 'react';
import logo from '../../assets/images/logo.svg';
import reactLogo from '../../assets/images/react.svg';
import classes from './Header.module.css';

const Header = () => {
    return (
        <Header>
            <div className="container">
                <div>
                    <img className={classes.logo} src={logo} alt="logo" />
                </div>
                <div className="textRight">
                    <img src={reactLogo} alt="react" className={classes.reactLogo} />
                    <strong>React</strong>
                </div>
            </div>
        </Header>
    );
};

export default Header;
