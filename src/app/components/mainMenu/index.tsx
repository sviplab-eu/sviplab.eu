import { motion } from 'framer-motion';
import { opacity, slideLeft, mountAnim } from './anim';
import styles from './style.module.scss';
import Link from './link';

const menu = [
  {
    title: "Case studies",
    url: "#",
    description: "To See Everything",
    images: ['agence1.jpg', 'agence2.jpg']
  },
  {
    title: "Solutions",
    url: "#",
    description: "To Learn Everything",
    images: ['agence1.jpg', 'agence2.jpg']
  },
  {
    title: "About",
    url: "#",
    description: "To Send a FAX",
    images: ['contact2.jpg', 'c2.jpg']
  },
  {
    title: "Career",
    url: "#",
    description: "Work with us",
    images: ['contact2.jpg', 'panda.jpg']
  }
]

export default function index({closeMenu}: any) {

  return (
    <div className={styles.menu}>

          <div className={styles.header}>
          <div className='flex justify-end pt-1'>
            <div className='flex content-center justify-center bg-white p-2 text-center text-black rounded-full hover:cursor-pointer' onClick={() => { closeMenu() }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>

            </div>
          </div>
          
        </div>

          
        <div className={styles.body}>
          {
            menu.map( (el, index) => {
              return <Link data={el} index={index} key={index}/>
            })
          }
        </div>

        <motion.div 
          variants={opacity} 
          {...mountAnim} 
          custom={0.5} 
          className={styles.footer}>
          <a>EN</a>
          <a>PL</a>
        </motion.div>

    </div>
  )
}