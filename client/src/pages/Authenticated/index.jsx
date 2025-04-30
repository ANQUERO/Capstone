import React, { useState, useEffect } from 'react';

// Styles
import style from '@css/authenticated.module.scss';

// Components
import Logo from '@components/Logo.jsx';
import MenuButton from '@components/MenuButton.jsx';

const MainContainer = ({ children }) => (
  <div className={style.mainContainer}>
    {children}
  </div>
);

const MenuContainer = ({ children, open }) => (
  <div className={`${style.menuContainer} ${open ? style.open : ''}`}>
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


const skAdminMenu = [
  {
    title: "Create Post",
    path: "/",
    visible: true,
    icon: ""
  },
  {
    title: "Dashboard",
    path: "/",
    visible: true,
    icon: ""
  },
  {
    title: "Youth",
    path: `/youth`,
    visible: true,
    icon: ""
  },
  {
    title: "Purok",
    path: "/purok",
    visible: true,
    icon: ""
  },
  {
    title: "Inbox",
    path: "/inbox",
    visible: true,
    icon: ""
  },
  {
    title: "Verification",
    path: "/verification",
    visible: true,
    icon: ""
  },
  {
    title: "Officials",
    path: "/officials",
    visible: true,
    icon: ""
  },
  {
    title: "Settings",
    path: "/",
    visible: true
  }
];

const skYouthMenu = [
  {
    title: "Create Post",
    path: "/",
    visible: true,
    icon: ""
  },
  {
    title: "Profile",
    path: "/",
    visible: true,
    icon: ""
  },
  {
    title: "Edit Porfile",
    path: "/officials",
    visible: true,
    icon: ""
  },
  {
    title: "Settings",
    path: "/",
    visible: true
  }
];


const menus = [
  ...(skAdminMenu ? skAdminMenu : []),
  ...(skYouthMenu ? skYouthMenu : []),
]

const menusTop = [
    {
      title: "Create Post",
      path: "/",
      visible: true,
      icon: ""
    }
]

const menusBottom = [
  {
    title: "Settings",
    path: `/account`,
    visible: true,
  }
]

const Authenticated = () => {
  const [open, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!open);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <MainContainer>

      {/* Dark Overlay */}
      <div className={`${style.overlay} ${open ? style.show : ''}`} onClick={closeMenu}></div>

      {/* Sidebar */}
      <MenuContainer open={open}>
        <div className={style.adminLogo}>
          <Logo />
          <h1>SKC</h1>
        </div>

        <nav className={style.navMenu}>
          <Menu menus={menus}/>
        </nav>
      </MenuContainer>

      {/* Main Content */}
      <ContentContainer>
        <div>
          <TopContainer>

            {/* Top right menu button */}
            <div className={style.topMenuButton}>
              <MenuButton open={open} onClick={toggleMenu} />
            </div>

            <div className={style.titleName}>
              <h1 className={style.title}>
                Hello, <span className={style.titleSpan}>Leester</span>!
              </h1>
              <p className={style.titleDescription}>
                Keep voters engaged, post updates, and manage data with ease.
              </p>
            </div>

            <UserContainer>
              {/* future user info */}
            </UserContainer>

          </TopContainer>

          <Content>


          </Content>

        </div>
      </ContentContainer>
    </MainContainer>
  );
};

export default Authenticated;
