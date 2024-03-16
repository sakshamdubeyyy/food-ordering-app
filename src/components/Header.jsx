import React, { useState } from 'react'
import styles from "./Header.module.css"
import { URL_LOGO } from '../utils/constants'

export default function Header() {
    const [isLoggedin, setIsLoggedIn] = useState(true)
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <img src={URL_LOGO} alt="logo" />
        </div>
        <div className={styles.options}>
            <nav className={styles.navBar}>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Contact Us 
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
