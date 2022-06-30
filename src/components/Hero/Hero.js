import React from 'react';
import './Hero.css';
import logo from '../../logo.svg';

class Hero extends React.Component {
    render() {
        return (
            <div className="Hero">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}

export default Hero