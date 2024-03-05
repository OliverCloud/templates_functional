"use client"
import Link from 'next/link';
import styles from './nav.module.css';
import { useState } from 'react';
import { FaBars, FaShoppingBasket, FaShoppingBag } from "react-icons/fa";
import Image from 'next/image';


const Nav = () => {

    const [nav, setNav] = useState(false);
    const [shop, setShop] = useState(false);

    const closeAll = () => {
        setNav(false);
        setShop(false);
    }

    const handleShop = () => {
        closeAll();
        setShop(!shop);
    }

    const handleClick = () => {
        closeAll();
        setMenu(!nav);
    }

  return (
    <div className={styles.container}>
        <div className={styles.backplate}></div>
        <div className={styles.wrapper}>
            <div className={styles.header}>
                
                <Link href="/">
                    <Image className={styles.logo} src={'/logo/smuknu_logo.png'} width={100} height={100} alt={'logo'}/>
                </Link>
                

                <div className={styles.btns}>
                    <div className={styles.btn} onClick={handleShop}>
                        <FaShoppingBasket />
                    </div>
                    <div className={styles.btn} onClick={handleClick}>
                        <FaBars />
                    </div>
                </div>
            </div>
            <div className={`${styles.nav} ${ nav ? styles.active : '' }`}>
                <div className={styles.navMenu}>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
            <div className={`${styles.shop} ${ shop ? styles.active : '' }`}>
                <div className={styles.shopMenu}>
                    <Link href="/shop">Shop</Link>
                    <Link href="/cart">Cart</Link>
                </div>
            </div>
        </div>
    </div>
  );
};
export default Nav;