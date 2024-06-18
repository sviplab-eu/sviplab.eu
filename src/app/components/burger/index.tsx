'use client'

import { useEffect, useState } from 'react';
import styles from './style.module.scss';

export default function ({ openMenu }: any) {

    return (
        <>
            <button onClick={() => { openMenu() }}  type="button" className="uppercase text-white bg-slate-900 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            contact us
        </button>
        </>
    )
}