import React from 'react';
import styles from "./Courseltems.module.css"
import img1 from "../assets/vj3v3rs7.png"
import img2 from "../assets/icons8_star.svg"
import img3 from "../assets/svgexport-14.png"
import img4 from "../assets/svgexport-15.svg"
import img5 from "../assets/svgexport-16.png"
import img6 from "../assets/svgexport-17.png"
import img7 from "../assets/svgexport-18.png"
import img8 from "../assets/svgexport-19.png"

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
            <div className={styles.itemsBooks}>
                <div className={styles.itemCards}>
                    <img src={img3} alt=""/>
                    <p>تعداد جلسات</p>
                    <span>12 جلسه</span>

                </div>
                <div className={styles.itemCards}>
                    <img src={img4} alt=""/>
                    <p>مدت دوره</p>
                    <span>02:45</span>

                </div>
                <div className={styles.itemCards}>
                    <img src={img5} alt=""/>
                    <p>نوع دوره</p>
                    <span>غیر حضوری</span>

                </div>
                <div className={styles.itemCards}>
                    <img src={img6} alt=""/>
                    <p>نحوه دریافت</p>
                    <span>مشاهده ابی</span>

                </div>
                <div className={styles.itemCards}>
                    <img src={img7} alt=""/>
                    <p>حجم دوره</p>
                    <span>980مگابیت</span>

                </div>
                <div className={styles.itemCards}>
                    <img src={img8} alt=""/>
                    <p>وضعیت</p>
                    <span>4جلسه مانده</span>

                </div>
            </div>
            
        </>
    );
};

export default CourseItems;