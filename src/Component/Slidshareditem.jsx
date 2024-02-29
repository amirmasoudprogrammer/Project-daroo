import React from 'react';
import {Link} from "react-router-dom";
import styles from "./SlidShared.module.css";
import imgNumber from "../assets/Group 10602.png";
import star from "../assets/icons8_star.svg";

const Slidshareditem = ({id, image, textsone, texttwo}) => {
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
                        </div>
                        <span>{texttwo}</span>
                    </div>
                    <div className={styles.Textfooter}>
                        <ul style={{width: "150px"}}>
                            <li style={{marginLeft:"20px"}} className={styles.listitem}>
                                <span>4.8</span>
                                <img src={star} alt=""/>
                            </li>
                            <li>2هزاربازدید</li>


                        </ul>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Slidshareditem;