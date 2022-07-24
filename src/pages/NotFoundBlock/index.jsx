import React from "react";

import styles from './NotFoundBlock.module.scss';

const NotFound = () => 
{
    return(
        <div className={styles.NotFound}> 
            <span>😞</span>
            <h1> ничего не найдено. </h1>
        </div> 
     );
}

export default NotFound;