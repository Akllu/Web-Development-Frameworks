import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={styles.NavBarBackground}>
            <div className={styles.NavBarContainer}> 
                <span>HELSINGIN SANOMAT</span>
                <div className={styles.NavBarSections}>
                <div>Etusivu</div>
                <div>Uutiset</div>
                <div>Lehdet</div>
                <div>Asiakaspalvelu</div>            
                </div>
                <div className={styles.NavBarControls}>
                <div className={styles.SubButton}>Tilaa</div>
                <div>Kirjaudu</div>
                <div>Valikko</div>            
                </div>
            </div>                  
        </div>
    )
}

export default NavBar;