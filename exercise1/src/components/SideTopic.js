import React from 'react'
import styles from './SideTopic.module.css'

const SideTopic = ({ header }) => {
    return (
        <div className={styles.SideTopic}>
            {header}
        </div>
    )
}

export default SideTopic
