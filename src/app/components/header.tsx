'use client'

import Image from 'next/image'
import styles from '../styles.module.css';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Header() {
    const [navbar, setNavbar] = useState(false);
    const [stikyNav, setStikyNav] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          const offset = window.scrollY;
          if (offset > 100) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <>
        <header className={`${styles.header} ${scrolled ? " bg-black ":" bg-transparent"} fixed`}>
            <div className={styles.logo}>
                <a className={styles.navbarBrand} href="/">
                    <div className='lg:pr-5 md:pr-3 pr-2'>

                        <Image
                            src="/assets/images/logo.png"
                            width={288}
                            height={56}
                            className={styles.brandlogo}
                            alt={'brand logo gizli bah'}
                        />
                    </div>
                    <span>14.YIL</span>
                </a>
            </div>
            <div className={styles.mobileMenu}>
                <a  onClick={() => setNavbar(!navbar)} >
                    <span>Menü</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2}
                         stroke="#40ddbe" className="xl:size-11	lg:size-10 size-9  ">
                        <path strokeLinecap="square" strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                </a>

            </div>
            {/*Mobile menu */}
            <div className={`${styles.overlayLayer} ${navbar ? styles.overlayLayerOpen : ''}`}>
            <div className={styles.overlayClose} >
                <button className="text-white" onClick={() => setNavbar(!navbar)}>
                    <svg fill="#40ddbe" stroke="#40ddbe" strokeLinecap="round" strokeLinejoin="round"
                         strokeWidth="1" viewBox="0 0 24 24" className="w-12 h-12">
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>

            {/*Mobile menu links */}
            <nav className="flex flex-col items-center">
                <a href="/" className="text-white hover:underline hover:text-[#40ddbe]">Anasayfa</a>
                <a href="/kurumsal" className="text-white hover:underline hover:text-[#40ddbe]">Kurumsal</a>
                <a href="#" className="text-white hover:underline hover:text-[#40ddbe]">MARKALAR</a>
                <a href="#" className="text-white hover:underline hover:text-[#40ddbe]">SEKTÖRLER</a>
                <a href="#" className="text-white hover:underline hover:text-[#40ddbe]">REFERANSLAR</a>
                <a href="#" className="text-white hover:underline hover:text-[#40ddbe]">İK</a>
                <a href="#" className="text-white hover:underline hover:text-[#40ddbe]">MEMNUNİYET ANKETİ</a>
                <a href="/iletisim" className="text-white hover:underline hover:text-[#40ddbe]">İLETİŞİM</a>
            </nav>
        </div>
        </header>
        </>
    )
}
