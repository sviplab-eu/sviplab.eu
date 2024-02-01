'use client'

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";

export default function Loading() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])
  // Or a custom loading skeleton component
  return (
    <AnimatePresence mode='sync'>
      {isLoading && <Preloader />}
    </AnimatePresence>
  )
}