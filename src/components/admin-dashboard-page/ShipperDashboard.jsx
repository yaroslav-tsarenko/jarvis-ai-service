import React, {useEffect, useState, useRef} from "react";
import './ShipperDashboard.css';
import {ReactComponent as OpenshipLogo} from "../../assets/openshipai-logo-3.svg";
import {ReactComponent as DashboardIcon} from "../../assets/dashboard-icon-grey.svg";
import {ReactComponent as DashboardIconWhite} from "../../assets/dashboard-icon-white.svg";
import {ReactComponent as LoadIcon} from "../../assets/load-icon-grey.svg";
import {ReactComponent as LoadIconWhite} from "../../assets/load-icon-white.svg";
import {ReactComponent as LogoutIcon} from "../../assets/logout-icon-grey.svg";
import {ReactComponent as LogoutIconWhite} from "../../assets/logout-icon-white.svg";
import {ReactComponent as PaymentIcon} from "../../assets/payment-icon-grey.svg";
import {ReactComponent as PaymentIconWhite} from "../../assets/payment-icon-white.svg";
import {ReactComponent as ProfileIcon} from "../../assets/profile-icon-grey.svg";
import {ReactComponent as ProfileIconWhite} from "../../assets/profile-icon-white.svg";
import {ReactComponent as SettingsIcon} from "../../assets/settings-icon-grey.svg";
import {ReactComponent as SettingsIconWhite} from "../../assets/settings-icon-white.svg";
import {ReactComponent as QoutesIcon} from "../../assets/listing-icon-grey.svg";
import {ReactComponent as QoutesIconWhite} from "../../assets/listing-icon-white.svg";
import {ReactComponent as CarrierChatIcon} from "../../assets/chat-icon-grey.svg";
import {ReactComponent as CarrierChatIconWhite} from "../../assets/chat-icon-white.svg";
import {ReactComponent as ArrowNav} from "../../assets/arrow-nav.svg";
import {ReactComponent as SearchIcon} from "../../assets/search-icon.svg";
import {ReactComponent as DefaultUserAvatar} from "../../assets/default-avatar.svg";
import {ReactComponent as BellIcon} from "../../assets/bell-icon.svg";
import {ReactComponent as SettingsAccountIcon} from "../../assets/settings-icon.svg";
import {ReactComponent as DirectionIcon} from "../../assets/direction-icon.svg";
import {ReactComponent as CarrierIcon} from "../../assets/trane-logo-carrier.svg";
import {useParams} from 'react-router-dom';
import {Link} from "react-router-dom";
import MetricCompoent from "../metric-component/MetricCompoent";
import GoogleMapRealTimeTrafficComponent
    from "../driver-dashboard/google-map-real-time-traffic-data/GoogleMapRealTimeTrafficComponent";
import JarvisChatComponent from "../jarvis-chat-page/JarvisChatComponent";

const ShipperDashboard = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [hoveredButton, setHoveredButton] = useState('');
    const {id} = useParams();
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className="shipper-dashboard-wrapper">
            <div className={`shipper-sidebar ${isSidebarOpen ? "" : "hidden"}`}>
                <section className="main-buttons">
                    <OpenshipLogo/>
                    <Link
                        className="link-nav-button"
                        to={`/shipper-dashboard/${id}`}
                        onMouseEnter={() => setHoveredButton('Dashboard')}
                        onMouseLeave={() => setHoveredButton('')}
                    >
                        {hoveredButton === 'Dashboard' ? <DashboardIconWhite className="link-nav-button-icon"/> :
                            <DashboardIcon className="link-nav-button-icon"/>}
                        Dashboard AI
                    </Link>
                    <Link
                        className="link-nav-button"
                        to={`/shipper-loads/${id}`}
                        onMouseEnter={() => setHoveredButton('Loads')}
                        onMouseLeave={() => setHoveredButton('')}
                    >
                        {hoveredButton === 'Loads' ? <LoadIconWhite className="link-nav-button-icon"/> :
                            <LoadIcon className="link-nav-button-icon"/>}
                        My Loads
                    </Link>
                    <Link
                        className="link-nav-button"
                        to={`/shipper-chat-conversation/${id}`}
                        onMouseEnter={() => setHoveredButton('CarrierChat')}
                        onMouseLeave={() => setHoveredButton('')}
                    >
                        {hoveredButton === 'CarrierChat' ? <CarrierChatIconWhite className="link-nav-button-icon"/> :
                            <CarrierChatIcon className="link-nav-button-icon"/>}
                        Chat with Carrier
                    </Link>
                    <Link
                        className="link-nav-button"
                        to={`/shipper-qoutes/${id}`}
                        onMouseEnter={() => setHoveredButton('Qoutes')}
                        onMouseLeave={() => setHoveredButton('')}
                    >
                        {hoveredButton === 'Qoutes' ? <QoutesIconWhite className="link-nav-button-icon"/> :
                            <QoutesIcon className="link-nav-button-icon"/>}
                        My Qoutes
                    </Link>
                    <Link
                        className="link-nav-button"
                        to={`/shipper-payments/${id}`}
                        onMouseEnter={() => setHoveredButton('Payments')}
                        onMouseLeave={() => setHoveredButton('')}
                    >
                        {hoveredButton === 'Payments' ? <PaymentIconWhite className="link-nav-button-icon"/> :
                            <PaymentIcon className="link-nav-button-icon"/>}
                        Payments
                    </Link>
                    <Link
                        className="link-nav-button"
                        to={`/shipper-profile/${id}`}
                        onMouseEnter={() => setHoveredButton('Profile')}
                        onMouseLeave={() => setHoveredButton('')}
                    >
                        {hoveredButton === 'Profile' ? <ProfileIconWhite className="link-nav-button-icon"/> :
                            <ProfileIcon className="link-nav-button-icon"/>}
                        Profile
                    </Link>
                    <Link
                        className="link-nav-button"
                        to={`/shipper-settings/${id}`}
                        onMouseEnter={() => setHoveredButton('Settings')}
                        onMouseLeave={() => setHoveredButton('')}
                    >
                        {hoveredButton === 'Settings' ? <SettingsIconWhite className="link-nav-button-icon"/> :
                            <SettingsIcon className="link-nav-button-icon"/>}
                        Settings
                    </Link>
                </section>
                <Link
                    className="link-nav-button-logout"
                    to={"/sign-in"}
                    onMouseEnter={() => setHoveredButton('Logout')}
                    onMouseLeave={() => setHoveredButton('')}
                >
                    {hoveredButton === 'Logout' ? <LogoutIconWhite className="link-nav-button-icon"/> :
                        <LogoutIcon className="link-nav-button-icon"/>}
                    Logout
                </Link>
            </div>
            <button className="close-shipper-side-bar" onClick={toggleSidebar}>
                <ArrowNav className={`arrow-nav-close-open-side-bar ${isSidebarOpen ? "" : "rotated"}`}/>
            </button>
            <div className="shipper-dashboard-content">
                <div className="shipper-dashboard-content-header">
                    <div className="shipper-dashboard-header-title">
                        <h2 className="shipper-dashboard-content-title">Welcome Back, John</h2>
                        <p className="shipper-dashboard-content-subtitle">Monitor payments, loads, revenues</p>
                    </div>
                    <div className="shipper-account-container">
                        <div className="shipper-dashboard-searchbar">
                            <SearchIcon className="search-icon-searchbar"/>
                            <input type="text" placeholder="Search anything..."/>
                        </div>
                        <div className="shipper-dashboard-account-info">
                            <section className="account-info">
                                <DefaultUserAvatar/>
                                <div className="account-info-text">
                                    <h3 className="account-info-name">John Doe</h3>
                                    <p className="account-info-role">Shipper</p>
                                </div>
                            </section>
                            <Link to={"#"} className="account-info-buttons"><BellIcon/></Link>
                            <Link to={"#"} className="account-info-buttons"><SettingsAccountIcon/></Link>
                        </div>
                    </div>
                </div>
                <div className="shipper-dashboard-content-body">
                    <div className="shipper-dashboard-chat-metric">
                        <div className="metrics-container-wrapper">
                            <MetricCompoent text="Service Rating"
                                            description="It’s yours global reputation on service"
                                            percent={75}
                                            color="#FFC107"/>
                            <MetricCompoent text="Success agreement "
                                            description="Average percent of  cooperate with carrier"
                                            percent={55}
                                            color="#0061ff"/>
                            <MetricCompoent text="Service Activity"
                                            description="Monitoring, service usability, connections"
                                            percent={86}
                                            color="#009f52"/>

                        </div>
                        <JarvisChatComponent/>
                    </div>
                    <div className="shipper-dashboard-side-panel-wrapper">
                        <div className="shipper-map-container">
                            <GoogleMapRealTimeTrafficComponent className="shipper-info-google-map-container"
                                                               origin="New York" destination="Washington"/>
                        </div>
                        <div className="shipper-dashboard-side-panel">
                            <div className="active-load-container">
                                <div className="load-container-status">
                                    <section className="load-status-section">
                                        <div className="load-status-icon"></div>
                                        Booked
                                    </section>
                                    <div className="load-directions">
                                        <DirectionIcon className="load-directions-icon"/>
                                        <div className="origin-destination-container">
                                            <section className="section-origin-destination">
                                                <h3 className="load-directions-title">New York, USA</h3>
                                                <p className="load-directions-description">13:00</p>
                                            </section>
                                            <section className="section-origin-destination">
                                                <h3 className="load-directions-title">Washington, USA</h3>
                                                <p className="load-directions-description">18:00</p>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                                <div className="load-container-info">
                                    <section className="load-info-section">Vehicle Load</section>
                                    <section className="load-info-section">239 mil</section>
                                    <section className="load-info-section">5674-5385-6525-8642</section>
                                </div>
                                <div className="load-container-carrier">
                                    <CarrierIcon className="carrier-icon"/>
                                    <button className="chat-carrier-button">Chat with Carrier</button>
                                </div>
                            </div>
                            <div className="active-load-container">
                                <div className="load-container-status">
                                    <section className="load-status-section">
                                        <div className="load-status-icon"></div>
                                        Booked
                                    </section>
                                    <div className="load-directions">
                                        <DirectionIcon className="load-directions-icon"/>
                                        <div className="origin-destination-container">
                                            <section className="section-origin-destination">
                                                <h3 className="load-directions-title">New York, USA</h3>
                                                <p className="load-directions-description">13:00</p>
                                            </section>
                                            <section className="section-origin-destination">
                                                <h3 className="load-directions-title">Washington, USA</h3>
                                                <p className="load-directions-description">18:00</p>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                                <div className="load-container-info">
                                    <section className="load-info-section">Vehicle Load</section>
                                    <section className="load-info-section">239 mil</section>
                                    <section className="load-info-section">5674-5385-6525-8642</section>
                                </div>
                                <div className="load-container-carrier">
                                    <CarrierIcon className="carrier-icon"/>
                                    <button className="chat-carrier-button">Chat with Carrier</button>
                                </div>
                            </div>
                            <div className="active-load-container">
                                <div className="load-container-status">
                                    <section className="load-status-section">
                                        <div className="load-status-icon"></div>
                                        Booked
                                    </section>
                                    <div className="load-directions">
                                        <DirectionIcon className="load-directions-icon"/>
                                        <div className="origin-destination-container">
                                            <section className="section-origin-destination">
                                                <h3 className="load-directions-title">New York, USA</h3>
                                                <p className="load-directions-description">13:00</p>
                                            </section>
                                            <section className="section-origin-destination">
                                                <h3 className="load-directions-title">Washington, USA</h3>
                                                <p className="load-directions-description">18:00</p>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                                <div className="load-container-info">
                                    <section className="load-info-section">Vehicle Load</section>
                                    <section className="load-info-section">239 mil</section>
                                    <section className="load-info-section">5674-5385-6525-8642</section>
                                </div>
                                <div className="load-container-carrier">
                                    <CarrierIcon className="carrier-icon"/>
                                    <button className="chat-carrier-button">Chat with Carrier</button>
                                </div>
                            </div>
                            <div className="active-load-container">
                                <div className="load-container-status">
                                    <section className="load-status-section">
                                        <div className="load-status-icon"></div>
                                        Booked
                                    </section>
                                    <div className="load-directions">
                                        <DirectionIcon className="load-directions-icon"/>
                                        <div className="origin-destination-container">
                                            <section className="section-origin-destination">
                                                <h3 className="load-directions-title">New York, USA</h3>
                                                <p className="load-directions-description">13:00</p>
                                            </section>
                                            <section className="section-origin-destination">
                                                <h3 className="load-directions-title">Washington, USA</h3>
                                                <p className="load-directions-description">18:00</p>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                                <div className="load-container-info">
                                    <section className="load-info-section">Vehicle Load</section>
                                    <section className="load-info-section">239 mil</section>
                                    <section className="load-info-section">5674-5385-6525-8642</section>
                                </div>
                                <div className="load-container-carrier">
                                    <CarrierIcon className="carrier-icon"/>
                                    <button className="chat-carrier-button">Chat with Carrier</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShipperDashboard;
