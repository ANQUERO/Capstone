import React from 'react';
import style from '@css/authenticated.module.scss';

import Logo from '@components/Logo.jsx';

// Container Components
const MainContainer = ({ children }) => (
    <div className={style.mainContainer}>
        {children}
    </div>
);

const MenuContainer = ({ children }) => (
    <div className={style.menuContainer}>
        {children}
    </div>
);

const ContentContainer = ({ children }) => (
    <div className={style.contentContainer}>
        {children}
    </div>
);

const TopContainer = ({ children }) => (
    <div className={style.topContainer}>
        {children}
    </div>
);

const UserContainer = ({ children }) => (
    <div className={style.userContainer}>
        {children}
    </div>
);

const Content = ({ children }) => (
    <div className={style.content}>
        {children}
    </div>
);

// Admin Dashboard Component
const Authenticated = () => {
    return (
        <MainContainer>
            <MenuContainer>
                <div className={style.adminLogo}>
                <Logo />
                <h1>SKC</h1>
                </div>
            
                <nav className={style.navMenu}>
                    <ul>
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Users</a></li>
                        <li><a href="#">Settings</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </nav>
            </MenuContainer>

            <ContentContainer>
                <TopContainer>
                    <h1>Dashboard</h1>
                    <UserContainer>
                        <div className={style.userInfo}>
                            <span>Admin User</span>
                        </div>
                    </UserContainer>
                </TopContainer>

                <Content>
                    <div className={style.dashboardCards}>
                        <div className={style.card}>Total Users: 150</div>
                        <div className={style.card}>Active Sessions: 45</div>
                        <div className={style.card}>Pending Requests: 5</div>
                    </div>
                </Content>
            </ContentContainer>
        </MainContainer>
    );
};

export default Authenticated;
