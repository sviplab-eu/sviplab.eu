"use client";

import { useState, useEffect } from "react";
import Burger from "../burger";
import { AnimatePresence } from "framer-motion";
import Stairs from "../stairs";
import ContactsMenu from "../contactsMenu";
import MainMenu from "../mainMenu";
import styles from './style.module.scss';
import Link from "next/link";
import MainMenuBurger from '../mainMenuBurger';

export function Header() {
    const [contactsMenuIsOpen, setContactsMenuIsOpen] = useState(false);
    const [mainMenuIsOpen, setMainMenuIsOpen] = useState(false);

    return (
        <nav className={`flex items-center justify-between fixed z-20 w-full px-5 pt-5 `}>
            
            <Link href={"/"} className="text-white text-4xl">
                LOGO
            </Link>

            <div>
            <div className={styles.menuContactsButtons + " text-white"}>
                <div className='flex content-center justify-center items-center'>
                    <Burger openMenu={() => { setContactsMenuIsOpen(true) }} />
                    <AnimatePresence mode="wait">
                        {contactsMenuIsOpen && <>
                            <Stairs />
                            <ContactsMenu closeMenu={() => { setContactsMenuIsOpen(false) }} />
                        </>}
                    </AnimatePresence>

                    <MainMenuBurger openMenu={() => { setMainMenuIsOpen(true) }} />
                    <AnimatePresence mode="wait">
                        {mainMenuIsOpen && <>
                            <Stairs />
                            <MainMenu closeMenu={() => { setMainMenuIsOpen(false) }} />
                        </>}
                    </AnimatePresence>
                </div>
            </div>
            </div>
        </nav>
    );
}
