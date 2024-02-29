import React from 'react';
import styles from "./PageCards.module.css"
import {Link} from "react-router-dom";

const PagesCards = ({id, image, text}) => {
    return (
        <Link className={styles.Page} to={`/Blog/${id}`}>
            <img src={image} alt="image"/>
             <div className={styles.text}>
                 <span>{text}</span>
             </div>
        </Link>
    );
};

export default PagesCards;