import React, {useEffect, useState, useRef} from "react";
import '../CarrierDashboard.css';
import {ReactComponent as OpenshipLogo} from "../../../assets/openship-ai-logo-updated.svg";
import {ReactComponent as DashboardIcon} from "../../../assets/dashboard-icon-grey.svg";
import {ReactComponent as DashboardIconWhite} from "../../../assets/dashboard-icon-white.svg";
import {ReactComponent as LoadIcon} from "../../../assets/load-icon-grey.svg";
import {ReactComponent as LoadIconWhite} from "../../../assets/load-icon-white.svg";
import {ReactComponent as LogoutIcon} from "../../../assets/logout-icon-grey.svg";
import {ReactComponent as LogoutIconWhite} from "../../../assets/logout-icon-white.svg";
import {ReactComponent as SettingsAccount} from "../../../assets/account-settings-icon.svg";
import {ReactComponent as SettingsAccountWhite} from "../../../assets/account-settings-icon-white.svg";
import {ReactComponent as SettingsPassword} from "../../../assets/lock-icon.svg";
import {ReactComponent as SettingsPasswordWhite} from "../../../assets/lock-icon-white.svg";
import {ReactComponent as SettingsNotifications} from "../../../assets/bell-settings-icon.svg";
import {ReactComponent as SettingsNotificationsWhite} from "../../../assets/bell-settings-icon-white.svg";
import {ReactComponent as SettingsHelp} from "../../../assets/help-settings-icon.svg";
import {ReactComponent as SettingsHelpWhite} from "../../../assets/help-settings-icon-white.svg";
import {ReactComponent as PaymentIcon} from "../../../assets/payment-icon-grey.svg";
import {ReactComponent as PaymentIconWhite} from "../../../assets/payment-icon-white.svg";
import {ReactComponent as ProfileIcon} from "../../../assets/profile-icon-grey.svg";
import {ReactComponent as ProfileIconWhite} from "../../../assets/profile-icon-white.svg";
import {ReactComponent as SettingsIcon} from "../../../assets/settings-icon-grey.svg";
import {ReactComponent as SettingsIconWhite} from "../../../assets/settings-icon-white.svg";
import {ReactComponent as LoadBoxIconWhite} from "../../../assets/LoadBoxIconWhite.svg";
import {ReactComponent as TireIcon} from "../../../assets/TireIcon.svg";
import {ReactComponent as TireIconWhite} from "../../../assets/tire-icon-white.svg";
import {ReactComponent as LoadBoxIcon} from "../../../assets/load-box-icon.svg";
import {ReactComponent as CarrierChatIcon} from "../../../assets/chat-icon-grey.svg";
import {ReactComponent as CarrierChatIconWhite} from "../../../assets/chat-icon-white.svg";
import {ReactComponent as ArrowNav} from "../../../assets/arrow-nav.svg";
import {ReactComponent as DefaultUserAvatar} from "../../../assets/default-avatar.svg";
import {ReactComponent as BellIcon} from "../../../assets/bell-icon.svg";
import {ReactComponent as SettingsAccountIcon} from "../../../assets/settings-icon.svg";
import {ReactComponent as SearchIcon} from "../../../assets/search-icon.svg";
import {ReactComponent as DeleteRedBinIcon} from "../../../assets/delete-account-bin-icon.svg";
import Switch from '../../switcher-component/Switch';
import {useParams} from 'react-router-dom';
import {Link} from "react-router-dom";
import DashboardSidebar from "../../dashboard-sidebar/DashboardSidebar";
import HeaderDashboard from "../../header-dashboard/HeaderDashboard";

const CarrierSettings = () => {
    const [activeSetting, setActiveSetting] = useState('Account');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [hoveredButton, setHoveredButton] = useState('');
    const {carrierID} = useParams();
    const [isOnAI, setIsOnAI] = useState(false);
    const [isOnCarrier, setIsOnCarrier] = useState(false);
    const [isOnDriver, setIsOnDriver] = useState(false);
    const [isOnUpdates, setIsOnUpdates] = useState(false);
    const handleToggleAI = () => {
        setIsOnAI(!isOnAI);
    };
    const handleToggleCarrier = () => {
        setIsOnCarrier(!isOnCarrier);
    };
    const handleToggleDriver = () => {
        setIsOnDriver(!isOnDriver);
    };
    const handleToggleUpdates = () => {
        setIsOnUpdates(!isOnUpdates);
    };
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className="carrier-dashboard-wrapper">
            <DashboardSidebar
                DashboardAI={{visible: true, route: `/carrier-dashboard/${carrierID}`}}
                TakeLoad={{visible: true, route: `/carrier-take-loads/${carrierID}`}}
                MyLoads={{visible: true, route: `/carrier-loads/${carrierID}`}}
                DriversAndEquip={{visible: true, route: `/carrier-drivers/${carrierID}`}}
                Payments={{visible: true, route: `/carrier-payments/${carrierID}`}}
                ChatWithShipper={{visible: true, route: `/carrier-chat-conversation/${carrierID}`}}
                Profile={{visible: true, route: `/carrier-profile/${carrierID}`}}
                Settings={{visible: true, route: `/carrier-settings/${carrierID}`}}
            />
            <div className="carrier-dashboard-content">
                <HeaderDashboard
                    contentTitle="Сarrier Dashboard"
                    contentSubtitle="By clicking on the qoute you can see the carriers listing"
                    accountName="TRANE"
                    accountRole="Carrier"
                    profileLink={`/carrier-profile/${carrierID}`}
                    bellLink={`/carrier-settings/${carrierID}`}
                    settingsLink={`/carrier-profile/${carrierID}`}
                />
                <div className="settings-container">
                    <section className="settings-nav">
                        <button
                            onMouseEnter={() => setHoveredButton('SettingsAccount')}
                            onMouseLeave={() => setHoveredButton('')}
                            onClick={() => setActiveSetting('Account')}
                        >
                            {hoveredButton === 'SettingsAccount' ?
                                <SettingsAccountWhite className="link-nav-button-icon"/> :
                                <SettingsAccount className="link-nav-button-icon"/>}
                            Account
                        </button>
                        <button
                            onMouseEnter={() => setHoveredButton('PasswordSettings')}
                            onMouseLeave={() => setHoveredButton('')}
                            onClick={() => setActiveSetting('Password')}
                        >
                            {hoveredButton === 'PasswordSettings' ?
                                <SettingsPasswordWhite className="link-nav-button-icon"/> :
                                <SettingsPassword className="link-nav-button-icon"/>}
                            Password
                        </button>
                        <button
                            onMouseEnter={() => setHoveredButton('NotificationsButton')}
                            onMouseLeave={() => setHoveredButton('')}
                            onClick={() => setActiveSetting('Notifications')}
                        >
                            {hoveredButton === 'NotificationsButton' ?
                                <SettingsNotificationsWhite className="link-nav-button-icon"/> :
                                <SettingsNotifications className="link-nav-button-icon"/>}
                            Notifications
                        </button>
                        <button
                            onMouseEnter={() => setHoveredButton('HelpSettings')}
                            onMouseLeave={() => setHoveredButton('')}
                            onClick={() => setActiveSetting('Help')}
                        >
                            {hoveredButton === 'HelpSettings' ? <SettingsHelpWhite className="link-nav-button-icon"/> :
                                <SettingsHelp className="link-nav-button-icon"/>}
                            Help
                        </button>
                    </section>
                    <section className="settings-content">
                        {activeSetting === 'Account' && (
                            <>
                                <h2>Account Info</h2>
                                <div className="account-info-details-container">
                                <div className="avatar-settings">
                                        <DefaultUserAvatar className="avatar-user-photo"/>
                                        <section className="avatar-settings-wrapper">
                                            <button className="change-avatar">Change Avatar</button>
                                            <button className="delete-avatar">Delete Photo</button>
                                        </section>
                                    </div>
                                    <div className="account-info-settings">
                                        <section className="account-info-settings-1">
                                            <div className="google-input-wrapper">
                                                <input
                                                    type="firstName"
                                                    id="firstName"
                                                    autoComplete="off"
                                                    className="google-style-input"
                                                    required={true}
                                                />
                                                <label htmlFor="firstName" className="google-style-input-label">Carrier
                                                    Name</label>
                                            </div>
                                            <div className="google-input-wrapper">
                                                <input
                                                    type="lastName"
                                                    id="lastName"
                                                    autoComplete="off"
                                                    className="google-style-input"
                                                    required={true}
                                                />
                                                <label htmlFor="lastName" className="google-style-input-label">Carrier
                                                    Last
                                                    Name</label>
                                            </div>
                                            <div className="google-input-wrapper">
                                                <input
                                                    type="lastName"
                                                    id="lastName"
                                                    autoComplete="off"
                                                    className="google-style-input"
                                                    required={true}
                                                />
                                                <label htmlFor="lastName" className="google-style-input-label">Carrier
                                                    Company Name</label>
                                            </div>
                                        </section>
                                        <section className="account-info-settings-2">
                                            <div className="google-input-wrapper">
                                                <input
                                                    type="phoneNumber"
                                                    id="phoneNumber"
                                                    autoComplete="off"
                                                    className="google-style-input"
                                                    required={true}
                                                />
                                                <label htmlFor="phoneNumber" className="google-style-input-label">Carrier
                                                    Phone Number</label>
                                            </div>
                                            <div className="google-input-wrapper">
                                                <input
                                                    type="carrierEmail"
                                                    id="carrierEmail"
                                                    autoComplete="off"
                                                    className="google-style-input"
                                                    required={true}
                                                />
                                                <label htmlFor="carrierEmail"
                                                       className="google-style-input-label">Carrier Email</label>
                                            </div>
                                            <div className="google-input-wrapper">
                                                <input
                                                    type="carrierEmail"
                                                    id="carrierEmail"
                                                    autoComplete="off"
                                                    className="google-style-input"
                                                    required={true}
                                                />
                                                <label htmlFor="carrierEmail"
                                                       className="google-style-input-label">Carrier DOT Number</label>
                                            </div>
                                        </section>
                                    </div>
                                    <button className="apply-settings-button">Apply</button>
                                </div>
                                <section className="deleting-account-section">
                                    <h2>Delete Account</h2>
                                    <a href="#">I want to permanently delete my account<DeleteRedBinIcon
                                        className="delete-bin-icon"/></a>
                                </section>
                            </>
                        )}
                        {activeSetting === 'Password' && (
                            <>
                                <h2>Password Settings</h2>
                                <p>To change your password, you need to enter your old password, then after this you
                                    need to enter your new password</p>
                                <section className="password-settings-container">
                                    <div className="google-input-wrapper">
                                        <input
                                            type="oldPassword"
                                            id="oldPassword"
                                            autoComplete="off"
                                            className="google-style-input"
                                            required={true}
                                        />
                                        <label htmlFor="oldPassword" className="google-style-input-label">Old
                                            Password</label>
                                    </div>
                                    <div className="google-input-wrapper">
                                        <input
                                            type="newPassword"
                                            id="newPassword"
                                            autoComplete="off"
                                            className="google-style-input"
                                            required={true}
                                        />
                                        <label htmlFor="newPassword"
                                               className="google-style-input-label">New Password</label>
                                    </div>
                                </section>
                                <section className="warning-message-section">
                                    <h3>If you change your password, you will be able to change it again after 7
                                        days</h3>
                                    <button className="apply-settings-button-bottom">Apply</button>
                                </section>
                            </>
                        )}
                        {activeSetting === 'Notifications' && (
                            <>
                                <h2>Notification Settings</h2>
                                <p>Your can in detail change service notification</p>
                                <section className="password-settings-container">
                                    <Switch isOn={isOnAI} handleToggle={handleToggleAI}
                                            label="Get notifications from AI"/>
                                    <Switch isOn={isOnCarrier} handleToggle={handleToggleCarrier}
                                            label="Get notifications from Carrier"/>
                                    <Switch isOn={isOnDriver} handleToggle={handleToggleDriver}
                                            label="Get notifications from Driver"/>
                                    <Switch isOn={isOnUpdates} handleToggle={handleToggleUpdates}
                                            label="Get notifications of updates"/>
                                </section>
                                <section className="warning-message-section">
                                    <h3>After confirmation, the changes take effect immediately</h3>
                                    <button className="apply-settings-button-bottom">Apply</button>
                                </section>
                            </>
                        )}
                        {activeSetting === 'Help' && (
                            <>
                                <h2>Help</h2>
                                <p>For help, you can contact us by email or phone</p>

                                <h2>I have a problem using service</h2>
                                <p>If you have any problem with service fill this form, then send it</p>
                                <section className="password-settings-container">
                                    <div className="google-input-wrapper">
                                        <input
                                            type="userEmail"
                                            id="userEmail"
                                            autoComplete="off"
                                            className="google-style-input"
                                            required={true}
                                        />
                                        <label htmlFor="userEmail" className="google-style-input-label">Email</label>
                                    </div>
                                    <div className="google-input-wrapper">
                                        <input
                                            type="text"
                                            id="newPassword"
                                            autoComplete="off"
                                            className="google-style-input"
                                            required={true}
                                            style={{
                                                height: "150px"
                                            }}
                                        />
                                        <label htmlFor="newPassword"
                                               className="google-style-input-label">Your Problem Description</label>
                                    </div>
                                </section>
                                <button className="apply-settings-button-bottom">Send</button>
                                <h2>I want to give feedback about project</h2>
                                <p>Could us know in details, what satisfied you or what disappoint you</p>
                                <section className="password-settings-container">
                                    <div className="google-input-wrapper">
                                        <input
                                            type="userEmail"
                                            id="userEmail"
                                            autoComplete="off"
                                            className="google-style-input"
                                            required={true}
                                        />
                                        <label htmlFor="userEmail" className="google-style-input-label">Email</label>
                                    </div>
                                    <div className="google-input-wrapper">
                                        <input
                                            type="text"
                                            id="newPassword"
                                            autoComplete="off"
                                            className="google-style-input"
                                            required={true}
                                            style={{
                                                height: "150px"
                                            }}
                                        />
                                        <label htmlFor="newPassword"
                                               className="google-style-input-label">Your Problem Description</label>
                                    </div>
                                </section>
                                <button className="apply-settings-button-bottom">Send</button>
                            </>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CarrierSettings;