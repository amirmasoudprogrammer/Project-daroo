import React from 'react';
import styles from "./Sliditems.module.css"
import svgking from "../assets/icons8_crown_1.svg"
import {Link} from "react-router-dom";

const SliadItem = ({id ,items, text, image, textend}) => {
    return (
        <Link className={styles.item} to={`/Blog/${id}`}>
        <div className={styles.pages}>
            <div className={styles.images}>
                <img src={image} alt="textimage"/>
            </div>
            <div className={styles.texts}>
                <div className={styles.textCards}>
                    <div className={styles.cardtext1}>
                        <p>{text}</p>
                    </div>
                    <div className={styles.cardtext2}>
                        <span>{items}</span>
                        <img src={svgking} alt="icon"/>
                    </div>
                </div>
                <p className={styles.textend}>{textend}</p>
            </div>
        </div>
        </Link>
    );
};

export default SliadItem;