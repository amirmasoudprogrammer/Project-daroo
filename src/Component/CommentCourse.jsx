import React from 'react';
import styles from "./CommentCurse.module.css"
import img12 from "../assets/Union 259.svg";
import img13 from "../assets/Union 221.svg"
import img14 from "../assets/icons8_clock_2.svg"
const CommentCourses = ({name, image, Biography, text}) => {
    return (
        <>
            <div className={styles.PagesCommentCou}>
                <div className={styles.imgCommentsicons}>
                    <img src={img12} alt="icons"/>
                </div>
                <div className={styles.PageComments}>
                    <div className={styles.CourseItems}>
                        <img src={image} alt="img"/>
                        <div className={styles.biuText}>
                            <span>{name}</span>
                            <p>{Biography}</p>
                        </div>
                    </div>
                    <div className={styles.ItemsTEXT}>
                        <p>{text}</p>
                    </div>
                    <div className={styles.ItemsICons}>
                        <div className={styles.Iconitems}>
                            <img src={img13} alt=""/>
                            <span>پاسخ دهید</span>
                        </div>
                        <div className={styles.Iconitems}>
                            <img src={img14} alt=""/>
                            <span>2ساعت پیش</span>
                        </div>

                    </div>
                </div>

            </div>

        </>
    );
};

export default CommentCourses;