'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000",
    url: "first",
    slug: "coffeeboom"
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C",
    url: "second",
    slug: "branity"
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3",
    url: "",
    slug: ""
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63",
    url: "",
    slug: ""
  }
]

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
}

export default function Projects() {

  const [modal, setModal] = useState({ active: false, index: 0 })
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" })
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" })
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" })
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" })
  }, [])

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }
  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({ active, index })
  }

  const imageLoader = ({ src, width, quality }) => {
    return `https://sviplab.eu/images/${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <main onMouseMove={(e) => { moveItems(e.clientX, e.clientY) }} className={styles.projects + ' min-h-screen'} id='projects'>
      <div className='py-16'>
        <span className='bg-emerald-700 text-white px-5 py-3 rounded-full'>Our cases</span>
      </div>


      <div className={styles.body}>
        {
          projects.map((project, index) => {
            return (
              <Link key={index} href={project.slug ? `/project/${project.slug}` : '#'} className='w-full'>
                <Project index={index} title={project.title} manageModal={manageModal} key={index} />
              </Link>
            )
          })
        }
      </div>


      <>
        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
          <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
            {
              projects.map((project, index) => {
                const { src, color } = project
                return <div className={styles.modal} key={`modal_${index}`}>
                 
                </div>
              })
            }
          </div>
        </motion.div>
        <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
      </>
    </main>
  )
}
