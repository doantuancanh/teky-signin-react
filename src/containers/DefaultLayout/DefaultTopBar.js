import React, { Component } from 'react';
import imglogout from './../../assets/images/logout.png'
import './../../static_template/assets/global/css/custom.css'

class DefaultTopBar extends Component {
	render() {
		const { children, ...attributes } = this.props;
		return (
			<div className="fixed-topbar fixed-sidebar theme-sdtl color-default dashboard">
				<div className="main-content">
					<div className="topbar">
                <div className="header-left">
                    <div className="topnav">
                        <a className="menutoggle" href="#" data-toggle="sidebar-collapsed"><span className="menu__handle"><span>Menu</span></span></a>
                        
                    </div>
                </div>
                <div className="header-right">
                    <ul className="header-menu nav navbar-nav">
                        <li className="dropdown" id="language-header">
                            <a href="#" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                <i className="icon-globe"></i>
                                <span>Ngôn ngữ</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#" data-lang="en"><img src="assets/global/images/flags/usa.png" alt="flag-english" /> <span>English</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" data-lang="es"><img src="assets/global/images/flags/spanish.png" alt="flag-english" /> <span>Español</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" data-lang="fr"><img src="assets/global/images/flags/french.png" alt="flag-english" /> <span>Français</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown" id="teky-logout">
                            <a href="#" onClick={e => this.props.onLogout(e)}>
                                <img src={imglogout} alt="user image" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
				</div>
			</div>
		);
	}
}

export default DefaultTopBar;