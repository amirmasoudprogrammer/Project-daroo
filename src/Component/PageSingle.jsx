import React from 'react';
import styles from "./PageSingle.module.css"
import {Link} from "react-router-dom";
import star from "../assets/icons8_star.svg";

const PageSingle = ({id, image, text}) => {
    return (
        <>
            <Link className={styles.Links} to="/Blog/Course">
                <div className={styles.Pages}>
                    <div className={styles.PageImg}><img src={image} alt="img"/></div>
                    <div className={styles.PageTexts}>
                        <div className={styles.Texts}><span>{text}</span></div>
                        <div className={styles.textbotton}>
                            <ul className={styles.listtexts}>
                                <li>زیبایی و پوست</li>
                                <li>2هزار بازدید</li>
                                <li>
                                    <img src={star} alt=""/>
                                    <span>4.8</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default PageSingle;