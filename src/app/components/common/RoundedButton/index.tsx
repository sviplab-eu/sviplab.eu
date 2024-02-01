'use client'

import React from 'react'
import { useEffect, useRef } from 'react';
import styles from './style.module.scss';
import gsap from 'gsap';

export default function index({ children, backgroundColor = "#455CE9", ...attributes }: any) {

    const circle = useRef(null);
    let timeline = useRef(null);
    let timeoutId: any = null;

    return (
        <>
            <div className={styles.roundedButton} style={{ overflow: "hidden" }} {...attributes}>
                {
                    children
                }
                <div ref={circle} style={{ backgroundColor }} className={styles.circle}></div>
            </div>
        </>
    )
}
