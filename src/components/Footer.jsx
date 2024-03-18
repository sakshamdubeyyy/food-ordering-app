import React from 'react'
import styles from "./Footer.module.css"
import { URL_LOGO } from '../utils/constants'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.footer}>
            <div className={styles.logo}>
                <Link to="/">
                    <img src={URL_LOGO} alt='logo' className={styles.logoImage}/>
                </Link>
                <h2 className={styles.name}>Sfiggy</h2>
            </div>
            <div className={styles.companySection}>
                <h3>Company</h3> 
                <Link to="/About" className={styles.link}>   
                    <p>About us</p>
                </Link>
            </div> 
            <div className={styles.contactSection}>
                <h3>Contact Us</h3>
                <Link to="/Contact" className={styles.link}>
                    <p>Help and support</p>
                </Link>
            </div>
        </div>
    </div>
  )
}
