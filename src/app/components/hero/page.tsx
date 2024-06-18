'use client'
import Image from 'next/image'
import styles from './style.module.scss'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function Home() {

    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction = e.direction * -1
            },
            x: "-500px",
        })
        requestAnimationFrame(animate);
    }, [])

    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        }
        else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent })
        gsap.set(secondText.current, { xPercent: xPercent })
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
    }

    return (
        <main className={styles.main}>
            <video preload='true' autoPlay no-controls='true' loop playsInline muted>
                <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>


            <div className={styles.sliderContainer}>
                <div ref={slider} className={styles.slider}>
                    <p ref={firstText}>Web Development &#9679; Software Testing &#9679; Mobile Development &#9679; </p>
                    <p ref={secondText}>Web Development &#9679; Software Testing &#9679; Mobile Development &#9679; </p>
                </div>
            </div>
        </main>
    )
}