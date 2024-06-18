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
                    <button id='fixedElement' onClick={() => { openMenu() }}  type="button" className="bg-white rounded-full uppercase text-black focus:outline-none font-medium text-sm px-2.5 py-2.5 text-center me-2 mb-2 hover:bg-slate-900 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>

        </button>
        </>
    )
}