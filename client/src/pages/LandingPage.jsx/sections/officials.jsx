import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Title = ({ text }) => (
    <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-white text-4xl md:text-6xl text-center'
    >
        {text}
    </motion.h1>
)

const Descriptions = ({ paragraph }) => (
    <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className='text-white text-lg md:text-2xl text-center line-clamp-3 max-w-2xl'
    >
        {paragraph}
    </motion.p>
)

const OfficialCard = ({ name, position, image }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center text-white space-y-2'
    >
        <img src={image} alt={name} className='w-24 h-24 rounded-full object-cover' />
        <h3 className='text-lg font-semibold'>{name}</h3>
        <p className='text-sm'>{position}</p>
    </motion.div>
)

const Officials = () => {
    const officialsData = [
        { name: 'Juan Dela Cruz', position: 'Chairperson', image: 'https://ui-avatars.com/api/?name=Juan+Dela+Cruz&background=random&color=fff' },
        { name: 'Maria Santos', position: 'Treasurer', image: 'https://ui-avatars.com/api/?name=Maria+Santos&background=random&color=fff' },
        { name: 'Jose Rizal', position: 'Secretary', image: 'https://ui-avatars.com/api/?name=Jose+Rizal&background=random&color=fff' },
        { name: 'Ana Reyes', position: 'Auditor', image: 'https://ui-avatars.com/api/?name=Ana+Reyes&background=random&color=fff' },
        { name: 'Carlos Garcia', position: 'Councilor', image: 'https://ui-avatars.com/api/?name=Carlos+Garcia&background=random&color=fff' },
        { name: 'Liza Dizon', position: 'Councilor', image: 'https://ui-avatars.com/api/?name=Liza+Dizon&background=random&color=fff' },
        { name: 'Pedro Gomez', position: 'Councilor', image: 'https://ui-avatars.com/api/?name=Pedro+Gomez&background=random&color=fff' },
        { name: 'Rosa Cruz', position: 'Councilor', image: 'https://ui-avatars.com/api/?name=Rosa+Cruz&background=random&color=fff' },
    ]

    return (
        <section id='officials' className='bg-[#111133]/20 min-h-screen flex flex-col justify-center items-center px-4 py-16'>
            <div className='space-y-6 max-w-3xl w-full'>
                <Title text='Meet the Catarman SK Officials' />
                <Descriptions paragraph='Our philosophy is simple — We use technology to track voters, ensure transparency, and engage the youth. Our core values: transparency, engagement, accountability.' />
            </div>

            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 w-full max-w-8xl'>
                {officialsData.map((official, index) => (
                    <div key={index} className='transform transition-transform hover:scale-105'>
                        <OfficialCard
                            name={official.name}
                            position={official.position}
                            image={official.image}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Officials
