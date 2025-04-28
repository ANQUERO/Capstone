import React from 'react'
import style from '@css/authenticated.module.scss'

const MainContainer = () => {
    <div className={style.mainContainer}>
    </div>
}

const MenuContainer = () => {
    <div className={style.menuContainer}>
    </div>
}

const ContentContainer = () => {
    <div className={style.contentContainer}>
    </div>
}

const TopContainer = () => {
    <div className={style.topContainer}>
    </div>
}

const UserContainer = () => {
    <div className={style.userContainer}></div>
}


const Content = () => {
    <div className={style.content}></div>
}

const Authenticated = () => {
    return (

        <MainContainer>
            <ContentContainer>

            </ContentContainer>

            <MenuContainer>

            </MenuContainer>
        </MainContainer>

    )
}

export default Authenticated