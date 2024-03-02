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
import img9 from "../assets/Subtraction 825.svg"
import img10 from "../assets/icons8_play.png"
import img11 from "../assets/Union 513.svg"
import img12 from "../assets/Union 259.svg"
import {CommentCourse} from "../Helper/itemCard.js";
import CommentCourses from "./CommentCourse.jsx";

const CourseItems = () => {
    return (
        <>
            <div className={styles.PageCourse}>
                <img style={{width:"100%"}} src={img1} alt=""/>
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
            <div className={styles.PagePrice}>
                <div className={styles.PagePricetext}>
                    <span>قیمت دوره</span>
                </div>
                <div className={styles.Pagetext}>
                    <span>1.900.000</span>
                    <del>2.200.000</del>
                    تومان
                </div>
            </div>
            <div className={styles.buttonsPrice}>
                <button>
                    <img src={img9} alt="icons"/>
                    <span>خرید آنی این دوره</span>
                </button>
            </div>
            <div className={styles.textPagePrice}>
                <span>توضیحات دوره</span>
                <div className={styles.PricesTexts}>
                    <p>نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که
                        صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و
                        اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه
                        رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با
                        استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌ بندی را
                        به پایان برند.
                        از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال
                        کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را
                        صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.
                    </p>
                </div>
            </div>
            <div className={styles.textVideoPage}>
                <h5>ویدئوهای دوره‌ها</h5>
                <div className={styles.PagePlaytext}>
                    <p>فصل اول: تعاریف و فرمولاسیون</p>
                    <div className={styles.Playitems}>
                        <div className={styles.itemPagesPlay}>
                            <div className={styles.iconsText}>
                                <img src={img10} alt=""/>
                                <div className={styles.textCardPlay}>
                                    <div className={styles.itemone}>
                                        <span>درس 1: بررسی امکان ترکیب</span>
                                    </div>
                                    <div className={styles.itemtwo}>
                                        <span>زمان ویدئو 12:45</span>
                                        <p>مشاهده شده</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.iconImg}>
                                <img src={img11} alt=""/>
                            </div>
                        </div>
                        <div className={styles.itemPagesPlay}>
                            <div className={styles.iconsText}>
                                <img src={img10} alt=""/>
                                <div className={styles.textCardPlay}>
                                    <div className={styles.itemone}>
                                        <span>درس 1: بررسی امکان ترکیب</span>
                                    </div>
                                    <div className={styles.itemtwo}>
                                        <span>زمان ویدئو 12:45</span>
                                        <p>مشاهده شده</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.iconImg}>
                                <img src={img11} alt=""/>
                            </div>
                        </div>
                        <div className={styles.itemPagesPlay}>
                            <div className={styles.iconsText}>
                                <img src={img10} alt=""/>
                                <div className={styles.textCardPlay}>
                                    <div className={styles.itemone}>
                                        <span>درس 1: بررسی امکان ترکیب</span>
                                    </div>
                                    <div className={styles.itemtwo}>
                                        <span>زمان ویدئو 12:45</span>

                                    </div>
                                </div>
                            </div>
                            <div className={styles.iconImg}>
                                <img src={img11} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.PagePlaytext}>
                    <p>فصل دوم: ترکیب فلان و بهمان</p>
                    <div className={styles.Playitems}>
                        <div className={styles.itemPagesPlay}>
                            <div className={styles.iconsText}>
                                <img src={img10} alt=""/>
                                <div className={styles.textCardPlay}>
                                    <div className={styles.itemone}>
                                        <span>درس 1: بررسی امکان ترکیب</span>
                                    </div>
                                    <div className={styles.itemtwo}>
                                        <span>زمان ویدئو 12:45</span>

                                    </div>
                                </div>
                            </div>
                            <div className={styles.iconImg}>
                                <img src={img11} alt=""/>
                            </div>
                        </div>
                        <div className={styles.itemPagesPlay}>
                            <div className={styles.iconsText}>
                                <img src={img10} alt=""/>
                                <div className={styles.textCardPlay}>
                                    <div className={styles.itemone}>
                                        <span>درس 1: بررسی امکان ترکیب</span>
                                    </div>
                                    <div className={styles.itemtwo}>
                                        <span>زمان ویدئو 12:45</span>

                                    </div>
                                </div>
                            </div>
                            <div className={styles.iconImg}>
                                <img src={img11} alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={styles.buttonPageC}>
                <span>‏15 درخواست ثبت شده است</span>
                <button>
                    <div className={styles.iconsButtons}>
                        <span>+</span>
                    </div>
                    <p>ثبت درخواست تبادل</p>
                </button>
            </div>
            <div className={styles.CommentsCourseitems}>
                {CommentCourse.map((items) => <CommentCourses key={items.id} image={items.images} name={items.name}
                                                              Biography={items.Biography} text={items.text}/>)}
            </div>
        </>
    );
};

export default CourseItems;