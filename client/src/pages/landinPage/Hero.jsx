import React from 'react'
import style from '@css/landingPage.module.scss'

const Tagline = ({ text1, text2 }) => (
    <h1 className={style.title}>
        <span className={style.block}>{text1}</span>
        <span className={style.block}>{text2}</span>
    </h1>
)

const Description = ({ paragraph }) => (
    <p className={style.paragraphs}>{paragraph}</p>
);

const Button


const BackGround = () => (
    <div className={style.background}>
        <img
            src=""
            alt="Background"
            className={style.backgroundImage}
        />
        <div className={style.transparent}> 
            <div className={style.left}></div>
            <div className={style.overlay}></div>
        </div>
    </div>

);

const Hero = () => {
    return (
       <main id='home' className={style.main}>

       </main>
    );
};

export default Hero