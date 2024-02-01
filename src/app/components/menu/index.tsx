import { motion } from 'framer-motion';
import { opacity, slideLeft, mountAnim } from './anim';
import styles from './style.module.scss';
import Link from './link';

const menu = [
    {
        link: "http://localhost:3000/",
        title: "Home",
        description: "To Learn Everything",
        images: ['decimal.jpg', 'funny.jpg']
    },
    {
        link: "/project",
        title: "Projects",
        description: "To See Everything",
        images: ['decimal.jpg', 'funny.jpg']
    },
    {
        link: "/contacts",
        title: "Contact",
        description: "To Send a FAX",
        images: ['decimal.jpg', 'funny.jpg']
    }
]

export default function index({ closeMenu }: any) {

    return (
        <>
            <div className={styles.menu}>

                <div className={styles.header}>
                    <motion.svg
                        variants={slideLeft}
                        {...mountAnim}
                        onClick={() => { closeMenu() }}
                        width="68"
                        height="68"
                        viewBox="0 0 68 68"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1.5L67 67" stroke="white" strokeWidth={5} />
                        <path d="M66.5 1L0.999997 66.5" stroke="white" strokeWidth={5} />
                    </motion.svg>
                </div>

                <div className={styles.body}>
                    {
                        menu.map((el, index) => {
                            return <Link
                                data={el}
                                key={index}
                                onClick={() => { closeMenu() }}
                            />
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
        </>
    )
}