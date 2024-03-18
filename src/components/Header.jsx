import React, { useState } from 'react'
import styles from "./Header.module.css"
import { URL_LOGO } from '../utils/constants'
import { Route, Routes, Link } from 'react-router-dom'

export default function Header() {
    const [isLoggedin, setIsLoggedIn] = useState(true)
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <Link to="/">
                <img className={styles.logoImage} src={URL_LOGO} alt="logo" />
            </Link>
        </div>
        <div className={styles.options}>
            <nav className={styles.navBar}>
                <ul>
                    <li>
                        <Link to="/" className={styles.link}>
                            Home
                        </Link>
                    </li>
                    <li>
                    <Link to="/About" className={styles.link}>
                        About
                    </Link>
                    </li>
                    <li>
                    <Link to="/Contact" className={styles.link}>
                        Contact Us
                    </Link>
                    </li>
                    <li>
                        Cart 
                    </li>
                    <button onClick={() => setIsLoggedIn(prev => !prev)} className={styles.loginButton}>{isLoggedin ? "Logout" : "Login"}</button>
                </ul>
            </nav>
        </div>
    </div>
  )
}
