'use client'

import { useEffect, useState } from 'react';
import styles from './style.module.scss';

export default function ({ openMenu }: any) {


    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Change the element ID based on your actual HTML structure
            const targetElement = document.getElementById('projects');
            const fixedElement = document.getElementById('fixedElement');

            if (targetElement && fixedElement) {
                const targetElementRect = targetElement.getBoundingClientRect();
                const fixedElementRect = fixedElement.getBoundingClientRect();

                // Check if the target element is in the viewport
                const isTargetVisible =
                    targetElementRect.top <= fixedElementRect.bottom &&
                    targetElementRect.bottom >= fixedElementRect.top;

                setIsScrolled(isTargetVisible);
            }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array to


    return (
        <>
            <div onClick={() => { openMenu() }} className={`${styles.button} ${isScrolled ? ' menu-bg' : 'no'}`} id="fixedElement">
                <div className={styles.background}></div>
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 19.78">
                    <line x1="15.5" y1="2.5" x2="80" y2="2.5" strokeLinecap='round' strokeMiterlimit={10} strokeWidth={5 + "px"} />
                    <line x1="30.17" y1="17.28" x2="69" y2="17.28" strokeLinecap='round' strokeMiterlimit={10} strokeWidth={5 + "px"} />
                </svg></div>
        </>
    )
}