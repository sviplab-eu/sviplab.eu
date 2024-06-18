'use client'

import styles from './style.module.scss';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Rounded from '../common/RoundedButton';

export default function Contacts({ openMenu }: any) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [0, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])

    const currentYear = new Date().getFullYear();

    function handleClick() {
        console.log('increment like count');
    }

    return (
        <>
            <motion.div style={{ y }} ref={container} className={styles.contact + " min-h-screen"} id={'contacts'} >
                <div className={styles.body}>
                    <div className={styles.title}>
                        <span>
                            <h2>Let's work together</h2>
                            <br /><br /><br /><br /><br /><br /><br />
                        </span>
                        <motion.div style={{ x }} className={styles.buttonContainer}>
                            <div id='contbut'>
                                <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                                    <p>Get in touch</p>
                                </Rounded>
                            </div>
                        </motion.div>
                        <motion.svg style={{ rotate, scale: 2 }} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white" />
                        </motion.svg>
                    </div>
                    <div className={styles.nav}>
                        <Rounded>
                            <p>+34 12 34 56 78</p>
                        </Rounded>
                        <Rounded>
                            <p>WhatsApp</p>
                        </Rounded>
                        <Rounded>
                            <p>info@sviplab.eu</p>
                        </Rounded>
                    </div>
                    <div className={styles.info}>
                        <div>
                            <span>
                                <h3></h3>
                                <p>{currentYear} © Sviplab</p>
                            </span>
                            <span>
                                <h3></h3>
                                <p></p>
                            </span>
                        </div>
                        <div>
                            <span>
                                <h3>socials</h3>
                                <p>Awwwards</p>
                            </span>
                            <p>Instagram</p>
                            <p>Dribbble</p>
                            <p>Linkedin</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
