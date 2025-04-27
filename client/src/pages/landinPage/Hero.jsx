import React from 'react'
import style from '@css/landingPage.module.scss'
import HeroImage from '@images/Hero.jpg'

const Tagline = ({ text1, text2 }) => (
    <h1 className={style.title}>
        <span className={style.block}>{text1}</span>
        <span className={style.block}>{text2}</span>
    </h1>
)

const Description = ({ paragraph }) => (
    <p className={style.paragraphs}>{paragraph}</p>
);



const BackGround = () => (
    <div className={style.background}>
        <img
            src={HeroImage}
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
            <BackGround/>
            <div className={style.foreground}>

                <Tagline
                text1="Empowered Youth,"
                text2="Empowered Democracy."
                />

                <Description
                paragraph="Know your rights, demand transparent leadership."
                />


                <div className={style.taglineButtons}>

                    


                </div>
            </div>
        </main>
    );
};

export default Hero