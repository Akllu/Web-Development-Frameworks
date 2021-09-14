import React from 'react'
import styles from './TopArticles.module.css'

const TopArticles = ({ header, content, type }) => {
    if(type === "New") {
        return (
            <div className={styles.TopArticles}>
                <span> {header} </span>                      
                {content}                                            
            </div>
        )
    }
    else {
        return (
            <div className={styles.Ad}>
                <span> {header} </span>
                {content} 
            </div>
        )
    }
}

export default TopArticles