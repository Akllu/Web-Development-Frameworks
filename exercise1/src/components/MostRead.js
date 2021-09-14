import React from 'react'
import styles from './MostRead.module.css'
 

const MostRead = ({ header, content })  => {
    return (
        <div className={styles.MostRead}>
                <li>
                    <span> {header} </span>
                    {content}
                    <hr/>
                </li>                  
        </div>
    )
}

export default MostRead