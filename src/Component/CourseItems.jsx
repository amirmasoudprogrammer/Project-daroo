import React from 'react';
import styles from "./Courseltems.module.css"
import img1 from "../assets/vj3v3rs7.png"
import img2 from "../assets/icons8_star.svg"

const CourseItems = () => {
    return (
        <>
        <div className={styles.PageCourse}>
            <img src={img1} alt=""/>
            <div className={styles.Itemstext}>
                <span>آموزش ترکیب داروهای موثر جهت رفع سوختگی پوستی درجه 3 و سوختگی‌های عمیق</span>
            </div>
            <div className={styles.listCourse}>
                <span>زیبایی پوست</span>
                <div className={styles.itemtext}>
                    <img src={img2} alt=""/>
                    <span>4.8</span>
                </div>
            </div>


        </div>
        </>
    );
};

export default CourseItems;