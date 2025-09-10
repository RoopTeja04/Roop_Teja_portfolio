import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Roop Teja</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I Build Scalable Web Applications, <br className='sm:block hidden' /> Delivering Solutions That Drive Results.
          </p>
        </div>

        <motion.div
          className="absolute top-32 -right-[9.4%]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.img
            src="https://www.practicalecommerce.com/wp-content/uploads/images/imports/cane-river-responsive.png"
            alt="Responsive design preview"
            className="h-[60vh] w-auto 
               sm:h-[50vh] sm:right-0 
               md:h-[60vh] 
               lg:h-[70vh] 
               max-w-full object-contain"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </motion.div>

      </div>


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center item-center'>
        <a href='#about'>
          <div className='w-[35px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero