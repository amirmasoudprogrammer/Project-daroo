import React from 'react';
import styles from "./CommentStyle.module.css"
import imgClock from "../assets/icons8_clock_2.svg"
import like from "../assets/2087973.svg"

const Comment = ({images, name, Biography, texts}) => {
    return (
        <>
            <div className={styles.PageComment}>
                <div className={styles.profile}>
                    <img src={images} alt="img"/>
                    <div className={styles.textprofile}>
                        <span>{name}</span>
                        <p>{Biography}</p>
                    </div>
                </div>
                <div className={styles.Ptexts}>
                    <p>{texts}</p>
                </div>
                <div className={styles.itemsComment}>
                    <div className={styles.itemCardComment1}>
                        <span>مفید بود؟</span>
                        <div className={styles.Commentone}>
                            <img src={like} alt=""/>
                            <span>7</span>
                        </div>
                    </div>
                    <div className={styles.itemCardComment2}>
                        <img src={imgClock} alt=""/>
                        <span>‏8 ساعت پیش</span>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Comment;