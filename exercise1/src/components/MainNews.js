import React from 'react'
import styles from './MainNews.module.css' 

const MainNews = ({ header, content, image, category }) => {
    return (
        <div className={styles.MainNews}>
            <div> <img src={image} alt="Pic"/> </div>            
            <span> {header} </span>            
            {content}
            <div className={styles.Category}> {category} </div>
        </div>
    )
}

export default MainNews