import React from 'react';
import styles from "../Component/SlidShared.module.css"
import imgNumber from "../assets/Group 10602.png"
import svgking from "../assets/icons8_crown_1.svg"
import star from "../assets/icons8_star.svg"
import {Link} from "react-router-dom";
const SlideShared = ({id,image, textsone, texttwo}) => {
    return (
        <>
            <Link className={styles.Link} to={`/Blog/${id}`}>
            <div className={styles.CardPage}>
                <div className={styles.Caedimg}>
                    <img src={image} alt="title"/>
                    <div className={styles.IconNumber}>
                        <img src={imgNumber} alt="number"/>
                    </div>
                </div>
                <div className={styles.CardText}>
                    <div className={styles.TextICON}>
                        <p>{textsone}</p>
                        <img src={svgking} alt=""/>
                    </div>
                    <span>{texttwo}</span>
                </div>
                <div className={styles.Textfooter}>
                    <ul>

                       <li className={styles.listitem}>
                           <span>4.8</span>
                           <img src={star} alt=""/>
                       </li>
                        <li>2هزاربازدید</li>
                        <li>زیبایی و پوست</li>

                    </ul>
                </div>
            </div>
            </Link>
        </>
    );
};

export default SlideShared;