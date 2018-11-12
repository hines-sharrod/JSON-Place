import React from 'react';
import '../../css/App.scss';
import logo from '../../img/jp-logo.png';

const Header = ({userOptions, userValue}) => {
    return(
        <div className="header">
            <div className="nav">
                <div>
                    <img className="logo" src={logo} alt="JSON Place Logo"/>
                </div> 
            </div>
            <div className="headerImage"></div>
        </div>
    )
}

export default Header; 