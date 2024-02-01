'use client'

import { useState } from 'react';
import styles from './style.module.scss'
import { mango } from '@/app/fonts/fonts'
import Link from 'next/link';

export default function Hero() {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <section className={'flex flex-col justify-center h-screen z-1 relative ' + styles.hero}>
                <h1 className={mango.className + ' justify-center text-center text-18vw z-10'}>Design that
                    <span className='ml-12 bg-lime-300 text-black hover:text-lime-300 hover:bg-black transition duration-150 ease-out hover:ease-in'>
                        inspires
                    </span>
                </h1>

                <div className={styles.gallery + ' text-center z-10'}>
                    <Link href={""}>elp</Link>
                </div>

                <video muted loop autoPlay>
                    <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4" />
                </video>
            </section>
        </>
    )

}