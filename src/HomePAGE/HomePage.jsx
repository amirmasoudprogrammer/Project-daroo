import React from 'react';
import styles from "./HomePage.module.css";
import {cardmain, item, Cardmaintwo, CardmainThree, CardEnd} from "../Helper/itemCard.js";
import SliadItem from "../Component/SliadItem.jsx";
import iconsvg from "../assets/icons8_crown_2.svg"
import {Link} from "react-router-dom";

import svgangle from "../assets/Union 465.svg"
import SlideShared from "../Component/SlideShared.jsx";
import Slidshareditem from "../Component/Slidshareditem.jsx";
import PagesCards from "../Component/PagesCards.jsx";
import PageSingle from "../Component/PageSingle.jsx";


const HomePage = () => {



    return (
        <>
            <main>
                <div className={styles.Slid}>
                    {item.map(item =>
                        <SliadItem key={item.id} id={item.id} items={item.items} text={item.text} textend={item.textend}
                                   image={item.image}/>
                    )}
                </div>
                <div className={styles.itemPageShared}>
                    <div className={styles.itemShared}>
                        <div className={styles.textNextPage}>
                            <Link to="/blogs/item">
                                <img src={svgangle} alt=""/>
                                <span>مشاهده همه</span>
                            </Link>
                        </div>
                        <div className={styles.textPage}>
                            <span>دوره‌های اشتراکی</span>
                            <img src={iconsvg} alt="icons"/>
                        </div>
                    </div>
                    <div className={styles.Carditem}>
                        {cardmain.map(item => <SlideShared key={item.id} id={item.id} image={item.image}
                                                           textsone={item.textsone} texttwo={item.texttwo}/>)}
                    </div>

                </div>
                <div className={styles.itemPageShared}>
                    <div className={styles.itemShared}>
                        <div className={styles.textNextPage}>
                            <Link to="/blogs/item">
                                <img src={svgangle} alt=""/>
                                <span>مشاهده همه</span>
                            </Link>
                        </div>
                        <div className={styles.textPage}>
                            <span>زیبایی پوست</span>
                        </div>
                    </div>
                    <div className={styles.Carditem}>
                        {Cardmaintwo.map(item => <Slidshareditem key={item.id} id={item.id} image={item.image}
                                                                 textsone={item.textsone} texttwo={item.texttwo}/>)}
                    </div>

                </div>
                <div className={styles.itemPageShared}>
                    <div className={styles.itemShared}>
                        <div className={styles.textNextPage}>
                            <Link to="/blogs/item">
                                <img src={svgangle} alt=""/>
                                <span>مشاهده همه</span>
                            </Link>
                        </div>
                        <div className={styles.textPage}>
                            <span>زیبایی پوست</span>
                        </div>
                    </div>
                    <div className={styles.PagemainCard}>
                        {CardmainThree.map(item => <PagesCards key={item.id} id={item.id} image={item.image}
                                                               text={item.text}/>)}
                    </div>
                </div>
                <div className={styles.CardEnd}>
                    <span>آخرین ویدئوها</span>
                    <div className={styles.List}>
                        <ul>
                            <li className={styles.active}>محبوب ‌ترین</li>
                            <li>جدیدترین</li>
                            <li>زیبای پوست</li>
                            <li>سوختگی</li>
                            <li>ترکیب دارویی</li>
                        </ul>
                    </div>
                    <div className={styles.EndPageCard}>
                        {CardEnd.map(items => <PageSingle key={items.id} id={items.id} image={items.image}
                                                          text={items.text}/>)}
                    </div>

                </div>
            </main>
        </>
    );
};

export default HomePage;