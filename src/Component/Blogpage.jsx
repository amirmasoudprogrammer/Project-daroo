import React, {useEffect, useState} from 'react';
import styles from "./BlogStyle.module.css"
import img1 from "../assets/kbde4e145.png"
import img2 from "../assets/94-945310_barra-de-video-do-youtube-png.png"
import img3 from "../assets/icons8_eye.svg"
import img4 from "../assets/icons8_stary.svg"
import img5 from "../assets/icons8_share_4.svg"
import img6 from "../assets/icons8_bookmark_2.svg"
import img7 from "../assets/icons8_menu_vertical_1.svg"
import {CommentCard} from "../Helper/itemCard.js";
import Comment from "./Comment.jsx";
import {Link} from "react-router-dom";
import imgking from "../assets/icons8_crown_2.svg"
import imgicons from "../assets/Union 513.svg"
import View from "./View.jsx";

const Blogpage = () => {
    const [active, setActive] = useState(false)
    useEffect(() => {
        setTimeout(function () {
            setActive(true)
        }, 3000)
    }, [])
    return (
        <>
            <div className={styles.pagesBlog}>
                <div className={styles.imgTextBlog}>
                    <div className={styles.imgBlogs}>
                        <img src={img1} alt="image"/>
                        <div className={styles.imgPlay}>
                            <img src={img2} alt="imgplay"/>
                        </div>
                    </div>
                    <div className={styles.textItemBlog}>
                        <span>آموزش ترکیب داروهای موثر جهت رفع سوختگی پوستی درجه 3 و سوختگی‌های عمیق</span>
                        <div className={styles.ItemstextBlog}>
                            <div className={styles.itemone}>
                                <div className={styles.textcard}>
                                    <img src={img3} alt="icon"/>
                                    <span>250بازدید</span>
                                </div>
                                <div className={styles.textcard}>
                                    <img src={img4} alt="icon"/>
                                    <span>4.8</span>

                                </div>
                            </div>
                            <div className={styles.itemtwo}>
                                <img src={img5} alt="icons"/>
                                <img src={img6} alt="icons"/>
                                <img src={img7} alt="icons"/>


                            </div>
                        </div>
                    </div>
                    <hr style={{marginRight: "25px", marginTop: "20px", color: "#ECECEC"}}/>
                </div>
                <div className={styles.textBlogs}>
                    <div className={styles.textCARDBlog}>
                        <p>
                            اگر استامینوفن را به سبب درد، تب یا گلودرد مصرف می‌کنید در هریک
                            از شرایط زیر با پزشکتان مشورت کنید: درد بیش از ۱۰ روز (در کودکان ۵
                            روز) طول بکشد یا اینکه علامت جدیدی به آن اضافه شود. تب بیش از
                            ۳ روز طول بکشد، بدتر شود، یا علامت جدیدی اضافه شود. گلودرد
                            دردناکتر شود، بیش از ۲ روز طول بکشد، یا تهوع، استفراغ، بثورات
                            .جلدی، یا سردرد رخ دهد</p>
                    </div>
                    {active ? (<div className={styles.alerttext}>
                            <Link className={styles.linkeitems} to="/Blog/1">
                                <div className={styles.cardtextP}>
                                    <div className={styles.iconImg}>
                                        <img src={imgking} alt=""/>
                                    </div>
                                    <div className={styles.textlinke}>
                                        <p>این ویدئو رایگان نیست! جهت خرید و نمایش
                                            .نسخه کامل، اینجا کلیک نمایید</p>
                                    </div>
                                </div>
                                <div className={styles.iconsAngle}>
                                    <img src={imgicons} alt=""/>
                                </div>
                            </Link></div>) :
                        <div style={{opacity: "0", visibility: "hidden"}}>
                            <Link className={styles.linkeitems} to="/Blog/1">
                                <div className={styles.cardtextP}>
                                    <div className={styles.iconImg}>
                                        <img src={imgking} alt=""/>
                                    </div>
                                    <div className={styles.textlinke}>
                                        <p>این ویدئو رایگان نیست! جهت خرید و نمایش
                                            .نسخه کامل، اینجا کلیک نمایید</p>
                                    </div>
                                </div>
                                <div className={styles.iconsAngle}>
                                    <img src={imgicons} alt=""/>
                                </div>
                            </Link>
                        </div>
                    }

                    <span>‏15 دیدگاه ثبت شده است</span>
                    <button className={styles.ButtonBlog}>
                        <Link className={styles.Linktest} to="/Blog/test">
                            <span>
                   +
                        </span>
                            <h3>درج دیدگاه جدید</h3>
                        </Link>
                    </button>
                </div>
            </div>
            <div className={styles.CommentCard}>
                {CommentCard.map(items => <Comment key={items.id} images={items.images} name={items.name}
                                                   Biography={items.Biography} texts={items.texts}/>)}
            </div>

        </>
    );
};

export default Blogpage;